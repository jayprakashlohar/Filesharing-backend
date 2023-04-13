const express = require("express");
const fileRouter = express.Router();

const {
  getFile,
  uploadFile,
  getSingleFile,
} = require("../Controllers/filecontrollers");

fileRouter.route("/get").get(getFile);
fileRouter.route("/get/:id").get(getSingleFile);
fileRouter.route("/upload").post(uploadFile);

module.exports = fileRouter;
