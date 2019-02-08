import { Component, OnInit } from '@angular/core';
import { MusicService } from "../music.service";
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

 /* constructor() { }
  arrayOfMovies = [];
 

  ngOnInit() {
     this.arrayOfMovies = JSON.parse(localStorage.getItem('movies'))
     console.log(this.arrayOfMovies)
 
  }
  remove(movie) {
    let data = JSON.parse(localStorage.getItem('movies'))
    data = data.filter(e => e.id !== movie.id);
    this.arrayOfMovies =  data;
    let string = JSON.stringify(data);

    localStorage.setItem("movies", string)
  }

   }*/
   constructor(private music: MusicService,private http:HttpClient) {}
   arrayOfMusic: any = [];

  ngOnInit() {
    this.displayimg();
  
  }
  displayimg() {
    this.music.displayImage().subscribe((x) => {
      this.arrayOfMusic = x
      console.log(this.arrayOfMusic)
    });
    onclick(music)
    {
      this.http.delete("http://localhost:3004/posts/"+music).subscribe(console.log)
      this.arrayOfMusic=this.arrayOfMusic.filter(data=>music!=data.id)
    }
  }
}
  
  



  

