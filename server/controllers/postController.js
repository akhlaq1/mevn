'use strict';
const Post = require('../models/post');
const errorHandler = require('../utils/errorHandler');
class PostController {
  //add
  async addPost(req, res) {
    try {
      const post = new Post(req.body);
      let response = await post.save();
      res.status(200).json({
        response,
        message: 'Saved Successfully',
      });
    } catch (error) {
      // console.log(error);
      errorHandler.sendRawErrorMessage(error);
    }
  }
  //update
  async updatePost(req, res) {
    try {
      const id = req.params.id;
      let response = await Post.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  //detail
  async getUserPost(req, res) {
    try {
      const id = req.params.id;
      let response = await Post.find({
        userId: id,
      });
      if (response==null) {
        res.status(404).json("No data found against this User")
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async getPostById(req, res) {
    try {
      const id = req.params.id;
      let response = await Post.findById(id);
      if (response==null) {
        res.status(404).json("No data found against this ID")
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async deletePostById(req, res) {
    try {
      const id = req.params.id;
      let response = await Post.findByIdAndRemove(id);
      if (response == null) {
        res.status(200).json('Already Deleted or not exist');
      } else {
        res.status(200).json({
            response,
            message:"Deleted Successfully"
        });
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

const postController = new PostController();
module.exports = postController;
