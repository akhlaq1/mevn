const PORT = process.env.PORT || 4000;

module.exports = {
  PORT: PORT,
  MONGO_CONNECTION: "mongodb://gamer:gamer123@ds137763.mlab.com:37763/game",
  TOKEN_SECRET: "TOKENSECRET321",
  MONGO_CONNECTIONn: "mongodb://localhost/wagergames",
  PUSHER_APP_ID: process.env.PUSHER_APP_ID || "673915",
  PUSHER_KEY: process.env.PUSHER_KEY || "b9f633f2654478de1fcd",
  PUSHER_SECRET: process.env.PUSHER_SECRET || "5a293a42b65ec65ea4f8",
  PUSHER_CLUSTER: process.env.PUSHER_CLUSTER || "ap1",
  STEAM_RETURN_URL: process.env.OPENID_RETURN_URL || `http://localhost:${PORT}/api/users/auth/steam/return`,
  STEAM_REALM: process.env.STEAM_REALM || `http://localhost:${PORT}/`,
  STEAM_KEY: process.env.PUSHER_CLUSTER || "CDE5E88BCFF5708284CAD59B46248699"
};
