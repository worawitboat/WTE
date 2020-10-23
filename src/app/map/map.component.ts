import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

import { AuthService } from '@app/shared/services';

declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ran = 0;
  mymap = L;
  type = history.state.type;

  food = []
  noodle = []
  drink = []

  focusImg = {}
  focusName = {}
  focusDes = {}


  constructor(private location: Location, private authService: AuthService) { }
  ngOnInit() {
    this.authService.getLocation().subscribe(data => {
      const place = data;

      // console.log(place);
      for (let i = 0 ; i < place.length ; i++) {
        if(place[i].type == 'food'){
          this.food.push(place[i])
        }else if(place[i].type == 'noodle'){
          this.noodle.push(place[i])
        }else if(place[i].type == 'drink'){
          this.drink.push(place[i])
        }


      }

    });

    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLng = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
      );

      // console.log(this.food[this.ran]);

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
        this.ran = Math.floor(Math.random() * this.food.length);
        console.log(this.food);

        console.log(this.ran);
        console.log(this.food);

        const focuslatlng = [parseFloat(this.food[this.ran].lat),parseFloat(this.food[this.ran].lng)];
        this.mymap.flyTo(focuslatlng, 16);
        this.focusImg = this.food[this.ran].img;
        this.focusName = this.food[this.ran].name;
        this.focusDes = this.food[this.ran].des;
        for (let i = 0; i < this.food.length; i++) {
          const foodlatlng = [parseFloat(this.food[i].lat),parseFloat(this.food[i].lng)];
          let store = L.marker(foodlatlng).addTo(this.mymap);
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
        this.ran = Math.floor(Math.random() * this.noodle.length);
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
        this.ran = Math.floor(Math.random() * this.drink.length);
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
    if (this.type == "drink") {
      this.ran = Math.floor(Math.random() * this.drink.length);
      this.mymap.flyTo(this.drink[this.ran].latlng, 16)
      this.focusImg = this.drink[this.ran].img;
      this.focusName = this.drink[this.ran].name;
      this.focusDes = this.drink[this.ran].des;
    } else if (this.type == "food") {
      this.ran = Math.floor(Math.random() * this.food.length);
      this.mymap.flyTo(this.food[this.ran].latlng, 16)
      this.focusImg = this.food[this.ran].img;
      this.focusName = this.food[this.ran].name;
      this.focusDes = this.food[this.ran].des;
    } else if (this.type == "noodle") {
      this.ran = Math.floor(Math.random() * this.noodle.length);
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



