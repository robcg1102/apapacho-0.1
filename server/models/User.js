const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photoURL: {
      type: String,
      default: "http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-2-icon.png"
    },
    typeUser: {
      type: String,
      default: "Donante",
      enum: ["Donante","Beneficiado","Asilo"]
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)