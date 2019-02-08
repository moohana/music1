import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getMusic(value) {
   return this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track="+value+"&format=json");
  }
  putMusic(image,title){
    console.log("Data is", title)
    return this.http.post("http://localhost:3004/favourite",{image,title}).subscribe(console.log)
  }
  displayImage(){
    return this.http.get("http://localhost:3004/favourite");
  }

  getDetails(value) { 
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track="+{value}+"&format=json");
  }
  putDetails(image,title){
    console.log("Data is", title)
    return this.http.post("http://localhost:3004/details",{image,title}).subscribe(console.log)
  } 
  displayImage1(){
    return this.http.get("http://localhost:3004/details");
  }
   //putDetails(image,title){
     //console.log("Data is" + title)
     //return this.http.post("http://localhost:3004/details",{
     //  image,title})
    // .subscribe(console.log)
  // }
   //displayImage(){
    // return this.http.get("http://localhost:3004/details");
  // }
  //} 
  //}


}
