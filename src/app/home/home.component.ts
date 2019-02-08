import { Component, OnInit } from '@angular/core';
import { MusicService } from "../music.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {

  constructor(private music: MusicService, private router: Router) { }

  arrayOfMusic=[];
  ngOnInit() {
    // this.music.getMusic().subscribe((data: any) => {
    //   console.log(data)
    //    data.results = data.results.map(e =>  { 
    //      e.poster_path ="http://ws.audioscrobbler.com/2.0/ " + e.poster_path
    //       return e 
    //     })
    //     this.arrayOfMusic = data.results
    // })
  
    this.music.getMusic("love").subscribe((data:any)=>
    {
      this.arrayOfMusic=data.results.trackmatches.track;
      console.log(data.results.trackmatches.track);
    })
    }
    addToFavs(music1) {

      console.log("data is :: ",+music1.image,music1.title)
        this.music.putMusic(music1.image,music1.title);
      
      
    
      }
     // this.music.getDetails("love").subscribe((data:any)=>
     // {
        //this.arrayOfMusic=data.results.trackmatches.track;
        //console.log(data.results.trackmatches.track);
     // })
      //}
      //Details(music1) {
  
       // console.log("data is :: ",+music1.image,music1.title)
         // this.music.putMusic(music1.image,music1.title);
        
        
      
        //} 
        detail(music) {
          console.log(music);
          this.router.navigateByUrl(`details/${music}`)
        }
  }
  


 


