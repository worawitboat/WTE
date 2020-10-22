const mongoose = require('mongoose');

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const LocationSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true },
    img:      { type: String, required: true },
    lat:      { type: String, required: true },
    lng:      { type: String, required: true },
    des:      { type: String, required: true },
    type:     { type: String, required: true },

  },
  {
    versionKey: false
  }
);


module.exports = mongoose.model('Location', LocationSchema);