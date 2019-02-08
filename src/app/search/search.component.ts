import { Component, OnInit } from '@angular/core';
import {MusicService} from "../music.service";
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private music: MusicService) { }

  arrayOfMusic = [];
  ngOnInit() {
    
  }

}