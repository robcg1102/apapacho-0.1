const { Schema, model  } = require("mongoose")

const visitSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    photoVisit: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_960_720.jpg",
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model("Visit", visitSchema)