const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    picture_url: { type: String },
    ride: [
      {
        name: { type: String },
        runtime: { type: String }
      }
    ]
  },
  { timestamps: true }
)
module.exports = mongoose.model('Park', Park)
