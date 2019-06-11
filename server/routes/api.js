const router = require("express-promise-router")();
const fileuploadController = require("./../controllers/fileuploadController");
const userController = require("../controllers/users");
const userDetailController = require("../controllers/userDetail");
const teamDetailController = require('./../controllers/teamDetailController');
const youtubeDetailController=require("./../controllers/youtubeDataController");
const postController=require("./../controllers/postController");
const eventController=require("./../controllers/eventController");
const GameController=require('../controllers/gameController');
const InboxController=require('../controllers/inboxController');
const ChallengeController=require('../controllers/challengeController');
const DisputeController = require('../controllers/disputeController');
const multer=require('multer');


const storage=multer.diskStorage({

  destination:function(req,file,cb){
     cb(null,'public/uploads/');
  },
  filename:function(req,file,cb){
     console.log(req)

   cb(null,file.originalname)
  }
});
const upload= multer({storage: storage});



const storage1=multer.diskStorage({

  destination:function(req,file,cb){
     cb(null,'public/disputes/');
  },
  filename:function(req,file,cb){
     console.log(req)

   cb(null,file.originalname)
  }
});
const upload1= multer({storage: storage1});







//Inbox API

router.post('/privateinbox',InboxController.PrivateInbox);

router.post('/publicinbox',InboxController.PublicInbox);

router.post('/privatemessage',InboxController.privateMessage);
router.post('/publicmessage',InboxController.publicMessage);



//Games API


//Register Game

router.post("/register/game",upload.single('GameImage'),GameController.registerGame);

router.post("/getGame",GameController.getGame);



//challenge
router.post("/registerChallenge",ChallengeController.registerChallenge);



//Dispute

router.post("/registerDispute",upload1.single('DisputeImage'),DisputeController.registerDispute)


//User Registeration Mechanism
//user
router.post("/users/register", userController.registerUser);
router.post("/users/auth/facebook", userController.logInWithFaceBook);
router.post("/users/auth/twitch", userController.logInWithTwitch);
router.post("/users/login", userController.signIn);
router.post("/users/profile", userController.profile);
router.post("/users/check", userController.checkUser);
router.post("/users/logout", userController.logOut);
router.get("/users", userController.getAllUsers);

router.get("/players/:username", userController.getUsersByName);

router.get("/users/:id", userController.getUserById);
router.put(
  "/users/update-detail",
  userDetailController.updateUserAdditionalDetail
);
router.put("/users/:id", userController.updateUserById);
//updating user portfolio
router.put("/users/portfolioUrl/:id", userController.updatePorfoloioLinkById);
//getting user portflio by url
router.post("/users/getPortfolio/Url", userController.getUserPortfolioByUrl);

router.delete("/users/:id", userController.deleteUser);
//Port-Folio page
router.post("/users/add-detail", userDetailController.addAdditionalDetail);
router.get("/users/:id/bio", userDetailController.getUserAdditionalDetail);
router.delete(
  "/users/delete-detail",
  userDetailController.removeUserAdditionalDetail
);
//team page
router.post("/user/add-team", teamDetailController.addTeam);
router.get("/user/get-team/:id", teamDetailController.getTeam);
router.put("/user/update-team", teamDetailController.updateTeam);
router.put("/add-team-member/:teamId", teamDetailController.addTeamMember);
router.put("/player/change-status", teamDetailController.changeStatusOfPlayer);
//youtube
router.post("/user/add-youtube-detail", youtubeDetailController.addYoutubeDetail);
router.get("/user/get-UserUTDetail/:id", youtubeDetailController.getUserYoutubeDetail);
router.get("/user/get-UTDetail/:id", youtubeDetailController.getYoutubeDetailById);
router.delete("/user/delete-TDetail/:id", youtubeDetailController.deleteYoutubeDetailById);
router.put("/user/update-TDetail/:id", youtubeDetailController.updateyoutubeDetail);
//post
router.post("/user/addPost", postController.addPost);
router.get("/user/getUserPost/:id", postController.getUserPost);
router.get("/user/getPost/:id", postController.getPostById);
router.delete("/user/deletePost/:id", postController.deletePostById);
router.put("/user/updatePost/:id", postController.updatePost);
//event
router.post("/user/addEvent", eventController.addEvent);
router.get("/user/getUserEvent/:id", eventController.getUserEvent);
router.get("/user/getEvent/:id", eventController.getEventById);
router.delete("/user/deleteEvent/:id", eventController.deleteEventById);
router.put("/user/updateEvent/:id", eventController.updateEvent);
//changing player status by email
router.put("/player/change-status", teamDetailController.changeStatusOfPlayer);
//experimental api's
router.post("/generateToken/:teamId", teamDetailController.generateToken);
router.post("/decode-token", teamDetailController.decodeToken);
router.delete("/user/delete-team/:userId", teamDetailController.removeTeam);
router.get("/sendAnEmail", userDetailController.sendEmail);

//file upload
router.post(
  "/file/upload",
  fileuploadController.uploadFile,
  fileuploadController.sendResponse
);
module.exports = router;