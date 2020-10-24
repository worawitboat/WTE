const bcrypt = require('bcrypt');
const Joi = require('joi');
const Location = require('../models/location.model');
var ObjectId = require('mongodb').ObjectID;

const locationSchema = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  lat: Joi.string().required(),
  lng: Joi.string().required(),
  des: Joi.string().required(),
  type: Joi.string().required()

})


module.exports = {
  insert,
  get,
  getAll,
  search,
  update,

}

async function insert(place) {
  place = await Joi.validate(place, locationSchema, { abortEarly: false });
  return await new Location(place).save();
}

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function update(place) {
  return await Location.updateOne({_id: ObjectId(place.id)},{$set:{name:place.name,img:place.img , lat:place.lat, lng:place.lng, des:place.des,type:place.type}});
}

async function search(place) {
  return await Location.deleteOne({name:place.name});
}

async function get(name) {
  return await Location.find({name: name});
}

async function getAll() {
  return await Location.find();
}

// async function search(key, value) {
//   let query = {};
//   query[key] = value;
//   return await Location.find(query);
// }
