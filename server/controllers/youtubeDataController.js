'use strict';
const YoutubeDetail = require('../models/youtubeData');
const errorHandler = require('../utils/errorHandler');
class YoutubeDetailController {
  //add
  async addYoutubeDetail(req, res) {
    try {
      const youtubeDetail = new YoutubeDetail(req.body);
      let response = await youtubeDetail.save();
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
  async updateyoutubeDetail(req, res) {
    try {
      const id = req.params.id;
      let response = await YoutubeDetail.findOneAndUpdate(
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
  async getUserYoutubeDetail(req, res) {
    try {
      const id = req.params.id;
      let response = await YoutubeDetail.find({
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

  async getYoutubeDetailById(req, res) {
    try {
      const id = req.params.id;
      let response = await YoutubeDetail.findById(id);
      if (response==null) {
        res.status(404).json("No data found against this ID")
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async deleteYoutubeDetailById(req, res) {
    try {
      const id = req.params.id;
      let response = await YoutubeDetail.findByIdAndRemove(id);
      if (response == null) {
        res.status(200).json('Already Deleted or not exist');
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

const youtubeDetailController = new YoutubeDetailController();
module.exports = youtubeDetailController;
