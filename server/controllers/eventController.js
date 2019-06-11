'use strict';
const Event = require('../models/event');
const errorHandler = require('../utils/errorHandler');

class EventController {
  //add
  async addEvent(req, res) {
    try {
      const event = new Event(req.body);
      let response = await event.save();
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
  async updateEvent(req, res) {
    try {
      const id = req.params.id;
      let response = await Event.findOneAndUpdate(
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
  async getUserEvent(req, res) {
    try {
      const id = req.params.id;
      let response = await Event.find({
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

  async getEventById(req, res) {
    try {
      const id = req.params.id;
      let response = await Event.findById(id);
      if (response==null) {
        res.status(404).json("No data found against this ID")
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }

  async deleteEventById(req, res) {
    try {
      const id = req.params.id;
      let response = await Event.findByIdAndRemove(id);
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

const eventController = new EventController();
module.exports = eventController;
