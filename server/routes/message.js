const route = require("express").Router();
const MessageController = require("../controllers/message");
const { authRequest } = require("../middlewares/auth");

route.get("/:userId", MessageController.getMessageById);
route.get("/detail/:contactId", MessageController.getMessageConvo);
// TODO: semua route dibawah jangan lupa kasih authRequest yaaa
route.post("/", MessageController.postMessage);
// route.delete("/:id", MessageController.deleteMessage);
// route.put("/:id", MessageController.putMessage);

module.exports = route;
