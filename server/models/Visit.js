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
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model("Visit", visitSchema)