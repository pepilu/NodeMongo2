const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      //unique: true
      //required: true
      required: [true, "Please add a text value"],
    },
  },
  {
    //automaticaly creates createdAt and updatedAt field
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
