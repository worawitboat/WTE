const express = require('express');
const asyncHandler = require('express-async-handler');
const locationCtrl = require('../controllers/location.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))
router.route('/update').put(asyncHandler(updatePlace));
router.route('/insert').post(asyncHandler(insert));
router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').post(asyncHandler(search));


async function updatePlace(req, res) {
  console.log(req.body);
  let place = await locationCtrl.update(req.body);
  res.json(place);
}

async function insert(req, res) {
  let place = await locationCtrl.insert(req.body);
  res.json(place);
}

async function get(req, res) {
  let all_places = await locationCtrl.get(req.params['name']);
  res.json(all_places);
}

async function getAll(req, res) {
  let all_places = await locationCtrl.getAll();
  res.json(all_places);
}

async function search(req, res) {
  let result = await locationCtrl.search(req.body);
  // let result = await locationCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}
