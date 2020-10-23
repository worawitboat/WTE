const bcrypt = require('bcrypt');
const Joi = require('joi');
const Location = require('../models/location.model');

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
}

async function insert(place) {
  place = await Joi.validate(place, locationSchema, { abortEarly: false });
  return await new Location(place).save();
}

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(name) {
  return await Location.find({name: name});
}

async function getAll() {
  return await Location.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Location.find(query);
}
