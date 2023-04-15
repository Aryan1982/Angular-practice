import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent { 
  apiUrl:string = `https://api.musixmatch.com/ws/1.1/track.search?apikey=84914fb92c55cf708ffa9b258fd7239c&q_track=adore you`;
//   trackData: any;
//   searchQuery: string = '';
//   trackQuery : string = '';
//     constructor(private cdRef: ChangeDetectorRef) { }
//   onSearch() {
//      this.cdRef.detectChanges();
//     console.log(this.searchQuery); // outputs the search query
//     this.trackQuery = this.searchQuery
//     this.getTrack();
//   }
// getTrack() {

//     const options = {
//   method: 'GET',
//   url: 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud',
//   params: {track: this.trackQuery},
//   headers: {
//     'X-RapidAPI-Key': '9f7c760327mshd4c0b7c94270680p141641jsn6313e25678e0',
//     'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
//   }
// };
// axios.request(options).then((response)=> {
//   this.trackData = response.data;
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });}

  }
