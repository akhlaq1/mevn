"use strict";
const TeamDetail = require("../models/teamDetail");
const User = require("./../models/user");
const config = require("./../config.json");
const addPlayerMiddleWare = require("./../middleware/addPlayerMiddleWare");
const ejs = require("ejs");
const nodeMailer = require("./../utils/nodeMailer");
class TeamDetailController {
    //add
    async addTeam(req, res) {
        try {
            const newTeam = new TeamDetail(req.body);
            const userId = req.body.userId;
            const currentUser = await User.findById(userId);
            if (currentUser == null) return res.status(404).json({
                message: "No user Found!!!"
            });
            const currentExtraDesc = currentUser.userAdditionalDetail;
            const currentTeams = currentUser.teamDetail;
            if (currentExtraDesc.length < 1) {
                res.status(400).json({
                    message: "You can't Set team, you must have portfolio."
                });
                return;
            }
            if (currentTeams.length >= 1) {
                res.status(400).json({
                    message: "Sorry! You Can have only one team!"
                });
                return;
            } else {
                newTeam.user = currentUser;
                let response = await newTeam.save();
                await User.findByIdAndUpdate(userId,
                    {
                    $set: {
                        userHasTeam: true,

                        teamDetail: newTeam
                    }
                });
                res.status(200).json({
                    response: response,
                    message: "Team Created Successfully"
                });
            }
        } catch (error) {
            // console.log(error);
            // errorHandler.sendRawErrorMessage(error);
        }
    }

    //detail
    async getTeam(req, res) {
        try {
            const userId = req.params.id;
            const currentUser = await User.findById(userId);
            if (currentUser == null) return res.status(404).json({
                message: "No user Found!!!"
            });
            const currentExtraDesc = currentUser.teamDetail;
            // console.log(currentExtraDesc);
            let response = await TeamDetail.findById(currentExtraDesc);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).send(error);
        }
    }
    //update
    async updateTeam(req, res) {
        try {
            const userId = req.body.userId;
            const currentUser = await User.findById(userId);
            if (currentUser == null) return res.status(404).json({
                message: "No user Found!!!"
            });
            const currentExtraDesc = currentUser.teamDetail;
            if (currentExtraDesc.length == 0) {
                res.status(400).send("You have no records to update");
            } else {
                let response = await TeamDetail.findOneAndUpdate({
                    _id: currentExtraDesc
                }, {
                    $set: req.body
                }, {
                    new: true
                });
                // console.log(response);
                res.status(200).json(response);
            }
        } catch (error) {
            res.send(error);
        }
    }
    //delete additional detail
    async removeTeam(req, res) {
        try {
            const userId = req.params.userId;
            // console.log(userId);
            const currentUser = await User.findById(userId);
            // console.log(currentUser);
            const currentExtraDesc = currentUser.teamDetail;
            const arrLen = currentUser.teamDetail.length;
            if (arrLen < 1) {
                res.status(400).json({
                    message: "There is nothing to delete!"
                });
            } else {
                await TeamDetail.findByIdAndRemove(currentExtraDesc);
                // await currentUser.teamDetail.splice(0, arrLen);
                // await currentUser.save();
                await User.findByIdAndUpdate(userId, {
                    $set: {
                        userHasTeam: false,
                        teamDetail: []
                    }
                });
                res.status(200).json({
                    message: "Deleted Successfully!"
                });
            }
        } catch (error) {
            res.status(400).send(error);
        }
    }

    async addTeamMember(req, res) {
        try {
            let username = req.body.username;
            let role = req.body.role;
            let teamId = req.params.teamId;
            let player = await User.findOne({
                username: username
            });
            if (player == null) return res.status(404).json({
                message: "Player wasn't found!!!"
            });
            let team = await TeamDetail.findById(teamId);
            if (team==null) {
                return res.status(404).json({
                    message: "Team  wasn't found!!!"
                });
            };
            let playerName = player.username;
            // console.log(playerName);
            let index = await team.pendingPlayers.indexOf(playerName);
            let index2 = await team.selectedPlayers.indexOf(playerName);
            if (index == 0 || index2 == 0) {
                if (index == 0) {
                    return res.status(400).json({
                        message: "You have already added this player (Pending)..."
                    })
                } else {
                    return res.status(400).json({
                        message: "You have already added this player(Approved)..."
                    })
                }
            };
            let playerEmailAddress = player.email;
            let playerId = player._id;
            let teamName = team.teamName;
            team.pendingPlayers.push(playerName);
            await team.save();
            let body = {
                teamId: teamId,
                playerId: playerId,
                role: role
            }
            let token = addPlayerMiddleWare.createJWT(body);
            ejs.renderFile("./emails/sendnvitations.ejs", {
                playerName: playerName,
                teamName: teamName,
                token: `${
                    config.CONFIRMATION_URL
                  }/${token}`
            }, async (err, str) => {
                try {
                    if (err) {
                        console.log(err);
                        // message: "Could not send email!"
                    };
                    await nodeMailer.sendMail(playerEmailAddress, "Invitation Received!", str);
                    res.status(200).send({
                        message: "Invitation has been sent successfully"
                    })
                } catch (error) {
                    console.log(error);
                }
            });

        } catch (error) {
            console.log(error);
        }
    }


    async changeStatusOfPlayer(req, res) {
        let token = req.body.token;
        let status = req.body.status;
        let decodedToken = addPlayerMiddleWare.decodeJWT(token);
        let teamId = decodedToken.sub.teamId;
        let playerId = decodedToken.sub.playerId;
        let role = decodedToken.sub.role;
        let player = await User.findById(playerId);
        if (player == null) {
            return res.status(404).json({
                message: "Player Doesn't exist!!!"
            });
        }
        let playerName = player.username;
        let team = await TeamDetail.findById(teamId);
        let index = await team.pendingPlayers.indexOf(playerName);
        // console.log(playerName);
        // console.log(index);
        if (index == -1 ) {
            return res.status(400).json({
                message: "Player Doesn't exist in Pending List/may be removed by Admin!!!"
            });
        }
        else{
            switch (status) {
                case "Approved":
                    await team.pendingPlayers.splice(index, 1);
                    team.selectedPlayers.push({name: playerName, role: role});
                    await team.save();
                    return res.status(200).json({
                        message: "Congratulations!!! You have been successfully Added into Team..."
                    });
                default:
                    await team.pendingPlayers.splice(index, 1);
                    await team.save();
                    return res.status(200).json({
                        message: "Thank-you!!! You have been successfully Denied the Team..."
                    });
            }
        }
    }

    async generateToken(req, res) {
        try {
            let username = req.body.username;
            let teamId = req.params.teamId;
            let player = await User.findOne({
                username: username
            });
            let playerId = player._id;
            if (player == null) return res.status(404).json({
                message: "Player wasn't found!!!"
            });
            let team = {
                teamId: teamId,
                playerId: playerId
            }
            let jwt = addPlayerMiddleWare.createJWT(team);
            res.send({
                token: jwt
            });

        } catch (error) {
            console.log(error);
        }
    }

    async decodeToken(req, res) {
        try {
            let token = req.body.token;
            let decodedToken = addPlayerMiddleWare.decodeJWT(token);
            res.status(200).json({
                decodeToken: decodeToken
            });
            // console.log(decodedToken);
        } catch (error) {
            console.log(error);
        }
    }
}

const teamDetailController = new TeamDetailController();
module.exports = teamDetailController;