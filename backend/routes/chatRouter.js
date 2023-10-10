const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatController");
const {protect} = require("../auhtMiddleware");
const router = express.Router();
router.post("/",protect,accessChat);
//router.post("/",protect,accessChat);
router.route("/").get(protect, fetchChats);
//router.route("/group").post(protect, createGroupChat);
//router.route("/rename").put(protect, renameGroup);
//router.route("/groupremove").put(protect, removeFromGroup);
//router.route("/groupadd").put(protect, addToGroup);

module.exports = router;