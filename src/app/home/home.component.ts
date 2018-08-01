import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { LatLong } from '../core/latlng';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  map: any;
   geocoder: any;

  markers: any;
  public myLatLng = {lat: -25.363, lng: 131.044};

  latitudePickUp: number;
  longitudePickUp: number;

  latitudeDropOff: number;
  longitudeDropOff: number;

  option: Number = 1; // 1 - for pick-up location; other - for drop-off location

  loader: any;

  startFlag: Boolean = false;

  locatorDiv: any;

  oldLatitude: number;
  oldLongitude: number;

  disableDragStartForPickUp: Boolean = false;
  disableDragStartForDropOff: Boolean = false;

  proceedButtonDisabled: Boolean = true;

  public locations = [
    {lat: -31.563910, lng: 147.154312},
    {lat: 80, lng: 100},
    {lat: 65, lng: 150},
    {lat: 12.52111, lng: 169},
    {lat: 40.069, lng: 45},
    {lat: -38.416, lng: 17.87},
    {lat: 47.516, lng: 14.550},
    {lat: 13.193, lng: -69.968},
    {lat: 50.503, lng: 175.790222},
    {lat: -3.344, lng: 145.116667},
    {lat: -16.290, lng: 145.128708},
    {lat: -14.235004, lng: -51.925},
    {lat: 17.16, lng: -88.497},
    {lat: -4.038, lng: 21.75338},
    {lat: -12.145, lng: 96.870},
    {lat: -0.228, lng: 15.827},
    {lat: 7.369, lng: 12.899},
    {lat: 16.002, lng: -24.0131},
    {lat: -41.330162, lng: 174.865694},
    {lat: 11.825, lng: 42.590},
    {lat: -1.831, lng: -78.183},
    {lat: 58.59, lng: 25.01},
    {lat: -43.999792, lng: 170.463352}
  ];


  // public contentString = '<div id="content">';
  // '<div id="siteNotice">' +
  // '</div>'
  // '<h1 id="firstHeading" class="firstHeading">' + this.something.CountryName + '</h1>' 
  // '<div id="bodyContent">' +
  // '<p></p>' +
  // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
  // '(last visited June 22, 2009).</p>' +
  // '</div>' +
  // '</div>';


  public infowindow = new google.maps.InfoWindow({
    // content: this.contentString
  });

//   geocoder = new google.maps.Geocoder();

  constructor (private ngZone: NgZone) { }

  ngOnInit() {
  this.createMap();
  }

// getCountryCoor(searchedCountry, array) {
// this.geocoder.geocode( { 'address': searchedCountry}, function(results, status) {
//       if (status === 'OK') {
// this.latitude = results[0].geometry.location.lat();
// this.longitude = results[0].geometry.location.lng();
// array.push({'lat': this.latitude, 'lng': this.longitude});
// } else {
//   console.log("Could not find the ");
// }

// });

// }





createMap(): void {
  navigator.geolocation.getCurrentPosition((response) => {
    if (response) {
      this.latitudePickUp = response.coords.latitude;
      this.longitudePickUp = response.coords.longitude;
      const currLocation = new google.maps.LatLng(this.latitudePickUp, this.longitudePickUp);
      const mapOptions = {
        center: currLocation,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      };
      const mapEl = document.getElementById('map');
      this.map = new google.maps.Map(mapEl, mapOptions);

      // google.maps.event.addListener(this.marker, 'click', () => {
      //   this.infowindow.open(this.map, this.marker);
      // });
      // this.markers = this.locations.map(function(location) {

      //   return new google.maps.Marker({
      //     position: new google.maps.LatLng(location.lat, location.lng)
      //   });
      // });
     this.locations.forEach(element => {
      const marker = new google.maps.Marker({
        position: element,
        map: this.map,
        title: 'Hello World!'
      });
      });
    }
  });
}
}
