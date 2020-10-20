import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ran = Math.floor(Math.random() * 5);
  mymap = L;
  type = history.state.type;
  food = [
    {
      name: "355 de steak",
      latlng: [15.115111, 104.911564],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/95384805_133248684976276_2673526968921620480_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeGurXnaQPMkLDTDgEDDqyMckVQCjRbgy76RVAKNFuDLvkPNz5gxmqXMD_tk2p3krlQ6Mnb9R4S3eRuJECjgsuWC&_nc_ohc=IvCe51im_VIAX8QXFzY&_nc_ht=scontent.fubp1-1.fna&oh=73e72663b03fe55d5a74aad2cd663ee9&oe=5FAB83D5",
      des: "Menu: rice, steak, snacks, drink(Free)"
    },
    {
      name: "Yuen steak",
      latlng: [15.119740, 104.898918],
      img: "https://images-ext-1.discordapp.net/external/1Yj8A28Zm4kRloncoOWoWUko2cIv0AtWioRgsVPnkJ4/https/foodubon.files.wordpress.com/2014/10/e0b8aae0b980e0b895e0b987e0b881e0b984e0b881e0b988e0b8abe0b8a2e0b8a7e0b899.jpg",
      des: "Menu: rice, steak, snacks, drink"

    },
    {
      name: "Basen",
      latlng: [15.123065, 104.898138],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
      des: "Menu: rice, steak, snacks, noodle, drink(Free)"
    },
    {
      name: "Wanyen",
      latlng: [15.1083301, 104.8993817],
      img: "https://img.kapook.com/u/2015/suppaporn/Ubon/mixubon.jpg",
      des: "Menu: rice, steak, snacks, drink"
    },
    {
      name: "Pakew Arhantamseng",
      latlng: [15.1150058, 104.8979231],
      img: "https://images-ext-1.discordapp.net/external/9jdXVHECO-YitiJqxHDvdzDH0sGqsrgn3741DAds0f8/https/www.siameagle.com/wp-content/uploads/2020/05/315168.jpg",
      des: "Menu: rice, drink(Free)"
    },
  ]

  noodle = [
    {
      name: "Basen",
      latlng: [15.115111, 104.911564],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
      des: "Menu: rice, steak, snacks, noodle drink(Free)"
    },
    {
      name: "Phupha Noodle",
      latlng: [15.1355545, 104.8983511],
      img: "https://pbs.twimg.com/media/EBNAGZNUwAImA8u.jpg",
      des: "Menu: noodle, snacks(Free), drink(Free)"

    },
    {
      name: "TumJub MoUbon",
      latlng: [15.119094, 104.8984093],
      img: "https://images-ext-2.discordapp.net/external/6lCHcY0KsFIa6PwdF0oLTA9sKZoAQAI_lJbiaAneTvg/https/i.ytimg.com/vi/ZsnreMPe0Iw/hqdefault.jpg",
      des: "Menu: noodle, snacks, drink(Free)"
    },
    {
      name: "Suan Pai",
      latlng: [15.1217672, 104.8908273],
      img: "https://images-ext-2.discordapp.net/external/iq6-29zdSefP-Nmmfu_uA6ENMx7p5X_3KXrkisg8uVo/https/pbs.twimg.com/media/EBNAGZNUwAImA8u.jpg?width=1015&height=677",
      des: "Menu: noodle, snacks, drink(Free)"
    },
    {
      name: "Zod Zap",
      latlng: [15.1156397, 104.8997795],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/67267786_371000286939425_7024834829866762240_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_eui2=AeG7xTtRy1blC8yaH1L8AwmZdqtLXpA8qTl2q0tekDypOeGTzmI6lwKnyrPW48Z67HnyD3lqmBbSPBSGPtc6isQe&_nc_ohc=wEy48iVEz60AX8O8TCO&_nc_ht=scontent.fubp1-1.fna&oh=6fd6a7dac774cacb9327d60e9a901297&oe=5FAD3D7F",
      des: "Menu: noodle, snacks, drink(Free)"
    },



  ]

  drink = [
    {
      name: "MIRUN CAFE",
      latlng: [15.119446, 104.909293],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/74272611_2278522599036817_5113147394678063104_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeHsbi3O0TdxAsyojHcNM3zVmtLgq7CGuXaa0uCrsIa5dihyvPAm64JtqXeWZgiBrXvfqzECjlGWmaUcLnzb5Zt-&_nc_ohc=T5GlPwzaRsUAX_X-Dhi&_nc_ht=scontent.fubp1-1.fna&oh=21f0439ca90c6553c9f13d6f1bffafd1&oe=5FA9C6D2",
      des: "Menu: drink"
    },
    {
      name: "MA'more",
      latlng: [15.113351, 104.904511],
      img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/16406480_1599273780089995_886489213650805076_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeGXP-pMpN-yYKHntt0Ycazd0ULvcw0w72vRQu9zDTDvaxdiA8SqBR9pocoGUSn5zhxvVH_1lpObaflVXY_DpYk0&_nc_ohc=XwR1sIWGhCIAX-d-6VC&_nc_ht=scontent.fubp1-1.fna&oh=68ab84dfec944e26aec6fb167f903800&oe=5FAA5256",
      des: "Menu: drink"
    },
    {
      name: "Balconykiss Coffee UBU",
      latlng: [15.117386, 104.908251],
      img: "https://fastly.4sqi.net/img/general/width960/78465712_AKbqSSXhShAtuYEbRbfpNfQM6aldefztiTOUDIf7VAk.jpg",
      des: "Menu: drink"
    },
    {
      name: "Woar luanluan",
      latlng: [15.1186305, 104.8987285],
      img: "https://images-ext-1.discordapp.net/external/Q2xBmzeKx1N3HGYlEGJrcMpDiC7oMBHb51I813nIyko/https/www.sentangsedtee.com/wp-content/uploads/2019/11/75252804_2519441764836256_8842522662354812928_n.png?width=1278&height=677",
      des: "Menu: drink"
    },
    {
      name: "Chapayom",
      latlng: [15.1176325, 104.8989814,20],
      img: "https://images-ext-1.discordapp.net/external/S5ozRb7ZyaO9Cqxs-s3jscYAnNO_GLFbd7Y3dpeUCDU/https/therichmustknow.com/wp-content/uploads/2017/06/4.jpg?width=494&height=677",
      des: "Menu: drink"
    },
  ]

  focusImg = {}
  focusName = {}
  focusDes = {}


  constructor(private location: Location) { }
  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLng = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
      );

      console.log(this.food[this.ran]);

      this.mymap = L.map('map').setView(latLng, 13);


      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        {
          attribution:
            "",
          maxZoom: 16,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        }
      ).addTo(this.mymap);
      

      let marker = L.marker(latLng).addTo(this.mymap);
      if (this.type == 'food') {
        this.mymap.flyTo(this.food[this.ran].latlng, 16)
        this.focusImg = this.food[this.ran].img;
        this.focusName = this.food[this.ran].name;
        this.focusDes = this.food[this.ran].des;
        for (let i = 0; i < this.food.length; i++) {
          let store = L.marker(this.food[i].latlng).addTo(this.mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + this.food[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h3 id="firstHeading" class="firstHeading">' + this.food[i].name + '</h3>' +
            '<div id="bodyContent">' +
            '<h4>' + this.food[i].des + '</h4>' +
            "</div>" +
            "</div>")

        }
      } else if (this.type == 'noodle') {
        this.mymap.flyTo(this.noodle[this.ran].latlng, 16)
        this.focusImg = this.noodle[this.ran].img;
        this.focusName = this.noodle[this.ran].name;
        this.focusDes = this.noodle[this.ran].des;
        for (let i = 0; i < this.noodle.length; i++) {
          let store = L.marker(this.noodle[i].latlng).addTo(this.mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + this.noodle[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h3 id="firstHeading" class="firstHeading">' + this.noodle[i].name + '</h3>' +
            '<div id="bodyContent">' +
            '<h4>' + this.noodle[i].des + '</h4>' +
            "</div>" +
            "</div>")
        }
      } else if (this.type == 'drink') {
        this.mymap.flyTo(this.drink[this.ran].latlng, 16)
        this.focusImg = this.drink[this.ran].img;
        this.focusName = this.drink[this.ran].name;
        this.focusDes = this.drink[this.ran].des;
        for (let i = 0; i < this.drink.length; i++) {
          let store = L.marker(this.drink[i].latlng).addTo(this.mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + this.drink[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h3 id="firstHeading" class="firstHeading">' + this.drink[i].name + '</h3>' +
            '<div id="bodyContent">' +
            '<h4>' + this.drink[i].des + '</h4>' +
            "</div>" +
            "</div>")
        }
      }


      marker.bindPopup('<b>Me</b>').openPopup();

    });
    this.watchPosition();
  }

  rand() {
    this.ran = Math.floor(Math.random() * 5);
    if (this.type == "drink") {
      this.mymap.flyTo(this.drink[this.ran].latlng, 16)
      this.focusImg = this.drink[this.ran].img;
      this.focusName = this.drink[this.ran].name;
      this.focusDes = this.drink[this.ran].des;
    } else if (this.type == "food") {
      this.mymap.flyTo(this.food[this.ran].latlng, 16)
      this.focusImg = this.food[this.ran].img;
      this.focusName = this.food[this.ran].name;
      this.focusDes = this.food[this.ran].des;
    } else if (this.type == "noodle") {
      this.mymap.flyTo(this.noodle[this.ran].latlng, 16)
      this.focusImg = this.noodle[this.ran].img;
      this.focusName = this.noodle[this.ran].name;
      this.focusDes = this.noodle[this.ran].des;
    }
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

}



