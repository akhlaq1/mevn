const express = require("express");
const router = express.Router();
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER } = require("../config.js");
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
});

const userController = require("../controllers/users");

//User Registeration Mechanism
router.get("/users/auth/steam", userController.redirectToSteam);
router.get("/users/auth/steam/return", userController.logInWithSteam);


/* Event scheduling (Calendar) */

// create new event
router.post("/schedule", (req, res) => {
  const { body } = req;
  const data = {
    ...body,
  };

  pusher.trigger("schedule", "new-event", data);
  res.json(data);
});

// update event
router.put("/schedule/:eventId", (req, res) => {
  const { body } = req;
  const data = {
    ...body,
  };

  pusher.trigger("schedule", "update-event", data);
  res.json(data);
});

// delete event
router.delete("/schedule/:eventId", (req, res) => {
  const { eventId } = req.params
  pusher.trigger("schedule", "delete-event", eventId);
  res.json({ "msg": "Event successfully deleted.", "eventId": eventId });
});

module.exports = router;
