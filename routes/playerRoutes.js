const router = require("express").Router();

const playerBodyValidation = require("../middlewares/playerBodyValidation");

const registerPlayerController = require("../controller/registerPlayerController");
const getPlayerByIdController = require("../controller/getPlayerByIdController");
const getAllPlayerController = require("../controller/getAllPlayerController")
const updatePlayerDetailController = require("../controller/updatePlayerDetailController")

router.post("/register", playerBodyValidation, (req, res) => {
  registerPlayerController.registerPlayerController(req, res)
});

router.post("/update/:_id", playerBodyValidation, (req, res) => {
  updatePlayerDetailController.updatePlayerDetailController(req, res)
});

router.get("/getPlayerById/:_id", (req, res) => {
  getPlayerByIdController.getPlayerByIdController(req, res)
});

router.get("/getAllPlayer", (req, res) => {
  getAllPlayerController.getAllPlayerController(req, res)
})

module.exports = router;
