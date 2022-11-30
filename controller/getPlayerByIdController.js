const player = require("../models/playerschema");

exports.getPlayerByIdController = async (req, res) => {

  try {
    const { _id } = req.params
    const players = await player.findById(_id)

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