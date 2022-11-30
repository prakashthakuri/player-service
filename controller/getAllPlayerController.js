const player = require("../models/playerschema");

exports.getAllPlayerController = async (req, res) => {

  try {
    const players = await player.find()

    if (players) {
      res.status(200).json({
        status: "success",
        message: players
      })
    }
    else {
      res.status(400).json({
        status: "fail",
        message: "Try again"
      })
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: false, message: err.message });
  }
}