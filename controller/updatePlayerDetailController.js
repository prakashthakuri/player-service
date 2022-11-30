const player = require("../models/playerschema");

exports.updatePlayerDetailController = async (req, res) => {

    const { name, gender, sports, date_of_birth, description, team, location } =
        req.body;
    const { _id } = req.params;
    try {

        const newPlayer = await player.findByIdAndUpdate(_id, {
            name: name, gender: gender, sports: sports, date_of_birth: date_of_birth, description: description, team: team, location: location
        })

        await newPlayer.save();

        res.status(200).json({ status: true, result: "Successfully Updated", message: newPlayer });

    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ status: false, message: err.message });
    }
}