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

// const locations = [
//     {
//       name: "355 de steak",
//       lat: 15.115111,
//       lng: 104.911564,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/95384805_133248684976276_2673526968921620480_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeGurXnaQPMkLDTDgEDDqyMckVQCjRbgy76RVAKNFuDLvkPNz5gxmqXMD_tk2p3krlQ6Mnb9R4S3eRuJECjgsuWC&_nc_ohc=IvCe51im_VIAX8QXFzY&_nc_ht=scontent.fubp1-1.fna&oh=73e72663b03fe55d5a74aad2cd663ee9&oe=5FAB83D5",
//       des: "Menu: rice, steak, snacks, drink(Free)",
//       type: "food"
//     },
//     {
//       name: "Yuen steak",
//       lat: 15.119740,
//       lng: 104.898918,
//       img: "https://images-ext-1.discordapp.net/external/1Yj8A28Zm4kRloncoOWoWUko2cIv0AtWioRgsVPnkJ4/https/foodubon.files.wordpress.com/2014/10/e0b8aae0b980e0b895e0b987e0b881e0b984e0b881e0b988e0b8abe0b8a2e0b8a7e0b899.jpg",
//       des: "Menu: rice, steak, snacks, drink",
//       type: "food"

//     },
//     {
//       name: "Basen",
//       lat: 15.123065,
//       lng: 104.898138,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
//       des: "Menu: rice, steak, snacks, noodle, drink(Free)",
//       type: "food"
//     },
//     {
//       name: "Wanyen",
//       lat: 15.1083301,
//       lng: 104.8993817,
//       img: "https://img.kapook.com/u/2015/suppaporn/Ubon/mixubon.jpg",
//       des: "Menu: rice, steak, snacks, drink",
//       type: "food"
//     },
//     {
//       name: "Pakew Arhantamseng",
//       lat: 15.1150058,
//       lng: 104.8979231,
//       img: "https://images-ext-1.discordapp.net/external/9jdXVHECO-YitiJqxHDvdzDH0sGqsrgn3741DAds0f8/https/www.siameagle.com/wp-content/uploads/2020/05/315168.jpg",
//       des: "Menu: rice, drink(Free)",
//       type: "food"
//     },



//     {
//       name: "Basen",
//       lat: 15.115111,
//       lng: 104.911564,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
//       des: "Menu: rice, steak, snacks, noodle drink(Free)",
//       type: "noodle"
//     },
//     {
//       name: "Phupha Noodle",
//       lat: 15.1355545,
//       lng: 104.8983511,
//       img: "https://pbs.twimg.com/media/EBNAGZNUwAImA8u.jpg",
//       des: "Menu: noodle, snacks(Free), drink(Free)",
//       type: "noodle"

//     },
//     {
//       name: "TumJub MoUbon",
//       lat: 15.119094,
//       lng: 104.8984093,
//       img: "https://images-ext-2.discordapp.net/external/6lCHcY0KsFIa6PwdF0oLTA9sKZoAQAI_lJbiaAneTvg/https/i.ytimg.com/vi/ZsnreMPe0Iw/hqdefault.jpg",
//       des: "Menu: noodle, snacks, drink(Free)",
//       type: "noodle"
//     },
//     {
//       name: "Suan Pai",
//       lat: 15.1217672,
//       lng: 104.8908273,
//       img: "https://images-ext-2.discordapp.net/external/iq6-29zdSefP-Nmmfu_uA6ENMx7p5X_3KXrkisg8uVo/https/pbs.twimg.com/media/EBNAGZNUwAImA8u.jpg?width=1015&height=677",
//       des: "Menu: noodle, snacks, drink(Free)",
//       type: "noodle"
//     },
//     {
//       name: "Zod Zap",
//       lat: 15.1156397,
//       lng: 104.8997795,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/67267786_371000286939425_7024834829866762240_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_eui2=AeG7xTtRy1blC8yaH1L8AwmZdqtLXpA8qTl2q0tekDypOeGTzmI6lwKnyrPW48Z67HnyD3lqmBbSPBSGPtc6isQe&_nc_ohc=wEy48iVEz60AX8O8TCO&_nc_ht=scontent.fubp1-1.fna&oh=6fd6a7dac774cacb9327d60e9a901297&oe=5FAD3D7F",
//       des: "Menu: noodle, snacks, drink(Free)",
//       type: "noodle"

//     },



//     {
//       name: "MIRUN CAFE",
//       lat: 15.119446,
//       lng: 104.909293,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/74272611_2278522599036817_5113147394678063104_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeHsbi3O0TdxAsyojHcNM3zVmtLgq7CGuXaa0uCrsIa5dihyvPAm64JtqXeWZgiBrXvfqzECjlGWmaUcLnzb5Zt-&_nc_ohc=T5GlPwzaRsUAX_X-Dhi&_nc_ht=scontent.fubp1-1.fna&oh=21f0439ca90c6553c9f13d6f1bffafd1&oe=5FA9C6D2",
//       des: "Menu: drink",
//       type: "drink"
//     },
//     {
//       name: "MA'more",
//       lat: 15.113351,
//       lng: 104.904511,
//       img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/16406480_1599273780089995_886489213650805076_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeGXP-pMpN-yYKHntt0Ycazd0ULvcw0w72vRQu9zDTDvaxdiA8SqBR9pocoGUSn5zhxvVH_1lpObaflVXY_DpYk0&_nc_ohc=XwR1sIWGhCIAX-d-6VC&_nc_ht=scontent.fubp1-1.fna&oh=68ab84dfec944e26aec6fb167f903800&oe=5FAA5256",
//       des: "Menu: drink",
//       type: "drink"
//     },
//     {
//       name: "Balconykiss Coffee UBU",
//       lat: 15.117386,
//       lng: 104.908251,
//       img: "https://fastly.4sqi.net/img/general/width960/78465712_AKbqSSXhShAtuYEbRbfpNfQM6aldefztiTOUDIf7VAk.jpg",
//       des: "Menu: drink",
//       type: "drink"
//     },
//     {
//       name: "Woar luanluan",
//       lat: 15.1186305,
//       lng: 104.8987285,
//       img: "https://images-ext-1.discordapp.net/external/Q2xBmzeKx1N3HGYlEGJrcMpDiC7oMBHb51I813nIyko/https/www.sentangsedtee.com/wp-content/uploads/2019/11/75252804_2519441764836256_8842522662354812928_n.png?width=1278&height=677",
//       des: "Menu: drink",
//       type: "drink"
//     },
//     {
//       name: "Chapayom",
//       lat: 15.1176325,
//       lng: 104.8989814,
//       img: "https://images-ext-1.discordapp.net/external/S5ozRb7ZyaO9Cqxs-s3jscYAnNO_GLFbd7Y3dpeUCDU/https/therichmustknow.com/wp-content/uploads/2017/06/4.jpg?width=494&height=677",
//       des: "Menu: drink",
//       type: "drink"
//     },


//   ]

// Location.insertMany(locations, (error, docs) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(docs);
//   }
//   // mongoose.connection.close();
// });

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

