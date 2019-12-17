const { Schema, model  } = require("mongoose")

const commentSchema = new Schema(
  {
    comment: {
      type: String
    },

    photoComment: {
      type: String,
      default: "https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2014/10/12/men-and-women-handle-stress-differently-their-heart.jpg",
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

module.exports = model("Comment", commentSchema)