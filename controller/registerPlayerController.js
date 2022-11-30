const player = require("../models/playerschema");

exports.registerPlayerController = async (req, res) => {

  const { name, gender, sports, date_of_birth, description, team, location } =
    req.body;

  try {
    
    const newRegisteredPlayer = await player.create({
      name, gender, sports, date_of_birth, description, team, location
    })

    await newRegisteredPlayer.save();

    res.status(200).json({ status: true, result: "Player Registered", message:  newRegisteredPlayer});

  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: false, message: err.message });
  }
}
