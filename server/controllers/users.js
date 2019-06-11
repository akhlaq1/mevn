'use strict';
const User = require('./../models/user');
const bcrypt = require('bcryptjs');
const errorHandler = require('./../utils/errorHandler');
const authMiddleware = require('./../middleware/authMiddleWare');
class UserController {
  async registerUser(req, res) {
    console.log("hello in controller")
    try {
      let username = req.body.username;
      let email = req.body.email;
      let password = req.body.password;
      let portfolioUrl = req.body.username;
      let userbyEmail = await User.findOne({
        email: email,
      });
      if (userbyEmail != null) {
        res.status(400).send({ message: 'Email already exists!' });
      } else {
        let userByName = await User.findOne({ username: username });
        if (userByName != null) {
          res.status(400).send({
            message: 'User name already exists, try new one!',
          });
        } else {
          let user = new User({
            method: 'local',
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
            portfolioUrl: portfolioUrl,
          });
          await user.save();
          res.status(200).json(user);
        }
      }
    } catch (error) {
      // errorHandler.sendRawError(error);
      console.log(error);
    }
  }

  //sign up with facebook
  async logInWithFaceBook(req, res) {
    try {
      if (req.body.code) return res.status(200).json({ token: req.body.code });
      let email = req.body.email;
      let username = req.body.username;
      let photoUrl = req.body.photoUrl;
      let provider = req.body.provider;
      let portfolioUrl = req.body.portfolioUrl;
      let user = await User.findOne({ email: req.body.email });
      if (user != null) {
        let token = authMiddleware.createJWT(user);
        await User.findOneAndUpdate(
          { email: email },
          { $set: { token: token } }
        );
        res.send({ token: token });
      } else {
        user = new User({
          method: 'facebook',
          email: email,
          username: username,
          photoUrl: photoUrl,
          provider: provider,
          portfolioUrl: portfolioUrl,
        });
        user = await user.save();
        let token = authMiddleware.createJWT(user);
        await User.findOneAndUpdate(
          { email: email },
          { $set: { token: token } }
        );
        res.send({ token: token });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Log in with twitch
  async logInWithTwitch(req, res) {
    try {
      let email = req.body.email;
      let username = req.body.username;
      let photoUrl = req.body.photoUrl;
      let user = await User.findOne({ email: req.body.email });
      if (user != null) {
        let token = authMiddleware.createJWT(user);
        await User.findOneAndUpdate(
          { email: email },
          { $set: { token: token } }
        );
        res.send({ token: token });
      } else {
        user = new User({
          method: 'twitch',
          email: email,
          username: username,
          photoUrl: photoUrl,
          portfolioUrl: portfolioUrl,
        });
        user = await user.save();
        let token = authMiddleware.createJWT(user);
        await User.findOneAndUpdate(
          { email: email },
          { $set: { token: token } }
        );
        res.send({ token: token });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //get Users
  async getAllUsers(req, res) {
    try {
      let users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      errorHandler.sendRawError(error);
    }
  }

  async getUsersByName(req, res) {
    try {
      let username = req.params.username;
      let users = await User.find({
        username: username,
      });
      if (users == null) {
        res.status(404).json('No player found!!!');
      } else {
        res.status(200).json(users);
      }
    } catch (error) {
      errorHandler.sendRawError(error);
    }
  }

  //get user by Id

  async getUserById(req, res) {
    try {
      let id = req.params.id;
      // console.log(id);
      let user = await User.findById(id);
      if (user == null) {
        res.status(404).json({ message: "Data against this ID isn't found" });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      // res.send(error);
      errorHandler.sendRawError(error);
    }
  }
  //get user and update

  async updateUserById(req, res) {
    try {
      let username = req.body.username;
      let email = req.body.email;
      let password = req.body.password;
      let id = req.params.id;
      let body = {
        username: username,
        email: email,
        password: password,
      };

      let user = await User.findOneAndUpdate(id, body, {
        new: true,
      });
      res.status(200).send(user);
    } catch (error) {
      res.send(error);
    }
  }
  //update portfolio url

  async updatePorfoloioLinkById(req, res) {
    try {
      let id = req.params.id;
      let portfolioUrl = req.body.portfolioUrl;
      let user = await User.findOneAndUpdate(
        id,
        {
          $set: {
            portfolioUrl: portfolioUrl,
          },
        },
        {
          new: true,
        }
      );
      res.status(200).send(user);
    } catch (error) {
      res.send(error);
    }
  }
//get user portfoliio by portfoilio link
async getUserPortfolioByUrl(req, res) {
  try {
    let portfolioUrl = req.body.portfolioUrl;
    let user = await User.findOne({
      portfolioUrl:portfolioUrl
    }).populate({
      path:"userAdditionalDetail"
    });
    if (user == null) {
      res.status(404).json({ message: "Data against this Url isn't found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    // res.send(error);
    errorHandler.sendRawError(error);
  }
}

  //update passeword logic left (non functional req)
  //delete user
  async deleteUser(req, res) {
    try {
      let id = req.params.id;
      let user = await User.findById(id);
      if (user == null) {
        return res
          .status(404)
          .json({ message: "User Doesn't exist or already removed!" });
      }
      await User.findByIdAndRemove(id);
      res.status(200).json({
        message: 'User Deleted Successfully!',
      });
    } catch (error) {
      errorHandler.sendRawError(error);
    }
  }
  //logIn
  async signIn(req, res) {
    try {
      let email = req.body.email;
      let password = req.body.password;
      let user = await User.findOne({
        email: email,
      });
      if (user == null) {
        res.status(404).json({
          message: 'User against provided Email is not found.Try again',
        });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          let jwt = authMiddleware.createJWT(user);
          res.send({ token: jwt });
        } else {
          res.status(400).json({ message: 'Password is incorrect' });
        }
      }
    } catch (error) {
      // errorHandler.sendRawError(error)
      console.log(error);
    }
  }
  //check user
  async checkUser(req, res) {
    try {
      let token = req.body.token;
      if (token == null)
        throw {
          code: 401,
          message: 'You are not authorized to make this request',
        };
      let decodedToken = authMiddleware.decodeJWT(token);
      let user = await User.findOne({ _id: decodedToken.sub });

      if (user == null) res.json({ authenticated: false });
      else
        res.json({
          authenticated: true,
        });
    } catch (error) {
      res.json({ authenticated: false });
    }
  }
  //profile
  async profile(req, res) {
    try {
      let token = req.body.token;

      if (token == null)
        res.status(401).send({
          message: 'You are not authorized to make this request',
        });
      let decodedToken = authMiddleware.decodeJWT(token);
      let user = await User.findOne({ _id: decodedToken.sub });
      if (user == null)
        res.status(401).send({
          message:
            'You are not authorized to make this request! User not found',
        });
      else res.json(user);
    } catch (error) {
      // errorHandler.sendRawError(error);
      console.log(error);
      // res.status(400).send(error.JsonWebTokenError.message);
    }
  }
  async logOut(req, res) {
    try {
      let user = await User.findById(req.query.userId);
      if (user == null) throw { code: 400, message: 'Incorrect user id' };
      else
        await User.findByIdAndUpdate(req.query.userId, {
          $set: { token: null },
        });
      res.send({ message: 'Logged out successfully!' });
    } catch (error) {
      res.send({ message: error });
    }
  }
  async getUserName(token) {

    let decodedToken = authMiddleware.decodeJWT(token);
          let user = await User.findOne({ _id: decodedToken.sub });
          console.log(user.username)
         return user.username;
        }



    }



const userController = new UserController();
module.exports = userController;
