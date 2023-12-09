const routes = require("express").Router();
const TaskController = require("../controller/TeskController")

routes.get("/", TaskController.getAll)

module.exports = routes