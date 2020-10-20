import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Router} from "@angular/router"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3
    
  };
  map: any;
  address:string;
  lat: string;
  long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any
  constructor(
    
    private geolocation: Geolocation ,
    public zone: NgZone,
    public router:Router  
    ) 
    
    {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      

      this.getLocation(resp.coords.latitude, resp.coords.longitude).then((a)=>{
        console.log(a)
        this.location =a;

      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
     
     this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
     console.log(this.GoogleAutocomplete)
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }
  


  getLocation(lat, lng) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        geocoder.geocode({ 'location': latlng }, function (results, status) {
          var address = results[0].address_components[3].short_name;
          // console.log(address);
          // console.log(results[0]);
          resolve(address)
        }, 4000);

      })


    })
  }

  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }


  UpdateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          console.log(prediction)
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }


  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo(){
   // return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.placeid;
  }


  SelectSearchResult(item) {
  
    this.placeid = item.place_id
    this.location =item.description;
  }



  AddShoppingList(){
    this.router.navigateByUrl("/add-shopping-list")
  }
  
}
