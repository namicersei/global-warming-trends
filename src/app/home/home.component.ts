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

  public latitude;
  public longitude;
  public searchControl: FormControl;
  public zoom: number;
  public searchedCountry: String;
  public arrayOfMarkedPlaces: LatLong[] = [];
  public flagToShowData = 0;
  geocoder = new google.maps.Geocoder();


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.zoom = 4;
    this.intializeMarker();
  }

getCountryCoor(searchedCountry, array) {
this.geocoder.geocode( { 'address': searchedCountry}, function(results, status) {
      if (status === 'OK') {
this.latitude = results[0].geometry.location.lat();
this.longitude = results[0].geometry.location.lng();
array.push({'lat': this.latitude, 'lng': this.longitude});
} else {
  console.log("Could not find the ");
}

});

}

intializeMarker() {
  this.arrayOfMarkedPlaces.push({'lat': 40, 'lng': 1.601554});
  this.arrayOfMarkedPlaces.push({'lat': 33.93911, 'lng': 67.709953});
  this.arrayOfMarkedPlaces.push({'lat': 12.52111, 'lng': -69.968338});
  this.arrayOfMarkedPlaces.push({'lat': -3.373056, 'lng': 29.918886});
  this.arrayOfMarkedPlaces.push({'lat': 4.535277, 'lng': 114.727669});
  this.arrayOfMarkedPlaces.push({'lat': -0.2228021, 'lng': 15.827659});
  this.arrayOfMarkedPlaces.push({'lat': -21.236736, 'lng': -159.777671});

}

moveToCountry() {
  this.getCountryCoor(this.searchedCountry, this.arrayOfMarkedPlaces);
}

showData() {
this.flagToShowData = 1;
console.log(this.flagToShowData)

}
}
