'use strict';
const User = require ('../models/user');
const UserDetail = require ('../models/userDetail');
const errorHandler = require ('../utils/errorHandler');
const nodemailer = require ('../utils/nodeMailer');
class UserDetailController {
  //add
  async addAdditionalDetail (req, res) {
    try {
      const newDetail = new UserDetail (req.body);
      const userId = req.body.userId;
      const currentUser = await User.findById(userId);
      const currentExtraDesc = currentUser.userAdditionalDetail;
      if (currentExtraDesc.length >= 1) {
        res.status (400).json ("You can't save records more than one.");
        return;
      } else {
        newDetail.user = currentUser;
        let response = await newDetail.save ();
        await User.findByIdAndUpdate (userId, {
          $set: {
            userHasAdditionalDetail: true,
            userAdditionalDetail: newDetail,
          },
        });
        res.status (200).json ({
          response,
          message: 'Saved Successfully',
        });
      }
    } catch (error) {
      // console.log(error);
      errorHandler.sendRawErrorMessage (error);
    }
  }
  //update
  async updateUserAdditionalDetail (req, res) {
    try {
      const userId = req.body.userId;
      const currentUser = await User.findById (userId);
      const currentExtraDesc = currentUser.userAdditionalDetail;
      if (currentExtraDesc.length == 0) {
        res.send (400).send ('You have no records to update');
      } else {
        let response = await UserDetail.findOneAndUpdate (
          {
            _id: currentExtraDesc,
          },
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status (200).json (response);
      }
    } catch (error) {
      res.send (error);
    }
  }
  //delete additional detail
  async removeUserAdditionalDetail (req, res) {
    try {
      const userId = req.body.userId;
      const currentUser = await User.findById (userId);
      const currentExtraDesc = currentUser.userAdditionalDetail;
      const arrLen = currentUser.userAdditionalDetail.length;
      if (arrLen < 1) {
        res.status (400).json ({
          message: 'There is nothing to delete!',
        });
      } else {
        await UserDetail.findByIdAndRemove (currentExtraDesc);
        // await currentUser.userAdditionalDetail.splice(0, arrLen);
        // await currentUser.save();
        await User.findByIdAndUpdate (userId, {
          $set: {
            userHasAdditionalDetail: false,
            userAdditionalDetail: [],
          },
        });
        res.status (200).json ({
          message: 'Deleted Successfully!',
        });
      }
    } catch (error) {
      res.status (400).send (error);
    }
  }
  //detail
  async getUserAdditionalDetail (req, res) {
    try {
      const userId = req.params.id;
      const currentUser = await User.findById (userId);
      const currentExtraDesc = currentUser.userAdditionalDetail;
      let response = await UserDetail.findById (currentExtraDesc);
      res.status (200).json (response);
    } catch (error) {
      res.status (404).send (error);
    }
  }

  async sendEmail (req, res) {
    try {
      let response = await nodemailer.sendMail(
        'ziaullah623@gmail.com',
        'How are you',
        'Thanks for reading'
      );
      // console.log (response);
    } catch (error) {
      console.log (error);
    }
  }
}

const userDetailController = new UserDetailController ();
module.exports = userDetailController;
