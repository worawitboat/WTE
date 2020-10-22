const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

const config = require('./config');
const Location = require('../models/location.model');

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

const locations = [
    {
      name: "355 de steak",
      lat: 15.115111,
      lng: 104.911564,
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/95384805_133248684976276_2673526968921620480_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeGurXnaQPMkLDTDgEDDqyMckVQCjRbgy76RVAKNFuDLvkPNz5gxmqXMD_tk2p3krlQ6Mnb9R4S3eRuJECjgsuWC&_nc_ohc=IvCe51im_VIAX8QXFzY&_nc_ht=scontent.fubp1-1.fna&oh=73e72663b03fe55d5a74aad2cd663ee9&oe=5FAB83D5",
      des: "Menu: rice, steak, snacks, drink(Free)",
      type: "food"
    },
    {
      name: "Yuen steak",
      lat: 15.119740,
      lng: 104.898918,
      img: "https://images-ext-1.discordapp.net/external/1Yj8A28Zm4kRloncoOWoWUko2cIv0AtWioRgsVPnkJ4/https/foodubon.files.wordpress.com/2014/10/e0b8aae0b980e0b895e0b987e0b881e0b984e0b881e0b988e0b8abe0b8a2e0b8a7e0b899.jpg",
      des: "Menu: rice, steak, snacks, drink",
      type: "food"

    },
    {
      name: "Basen",
      lat: 15.123065,
      lng: 104.898138,
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
      des: "Menu: rice, steak, snacks, noodle, drink(Free)",
      type: "food"
    },
    {
      name: "Wanyen",
      lat: 15.1083301,
      lng: 104.8993817,
      img: "https://img.kapook.com/u/2015/suppaporn/Ubon/mixubon.jpg",
      des: "Menu: rice, steak, snacks, drink",
      type: "food"
    },
    {
      name: "Pakew Arhantamseng",
      lat: 15.1150058,
      lng: 104.8979231,
      img: "https://images-ext-1.discordapp.net/external/9jdXVHECO-YitiJqxHDvdzDH0sGqsrgn3741DAds0f8/https/www.siameagle.com/wp-content/uploads/2020/05/315168.jpg",
      des: "Menu: rice, drink(Free)",
      type: "food"
    },
  ]

Location.insertMany(locations, (error, docs) => {
  if (error) {
    console.error(error);
  } else {
    console.log(docs);
  }
  // mongoose.connection.close();
});

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

