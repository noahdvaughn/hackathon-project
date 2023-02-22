const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    name: { type: String, required: true },
    runtime: { type: String },
    park_id: { type: Schema.Types.ObjectId, ref: 'park_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ride', Ride)
