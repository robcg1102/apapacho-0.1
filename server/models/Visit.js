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