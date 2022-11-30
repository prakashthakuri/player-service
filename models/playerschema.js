const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
   {
      name: {
         type: String,
      },
      gender: {
         type: String,
      },
      sports: {
         type: Array,
      },
      date_of_birth: {
         type: String,
      },
      description: {
         type: String,
      },
      team: {
         type: String,
      },
      location: {
         type: String,
      },
   },
   { timestamps: true, collection: 'players' }
);
module.exports = mongoose.model("player", playerSchema);
