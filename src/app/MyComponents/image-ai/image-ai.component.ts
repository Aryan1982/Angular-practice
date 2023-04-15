import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.css']
})
export class ImageAIComponent {
 prompt: any;
 objects:any;

 getImage(){
  // console.log("loading")
  const options = {
  method: 'POST',
  url: 'https://openai80.p.rapidapi.com/images/generations',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '9f7c760327mshd4c0b7c94270680p141641jsn6313e25678e0',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  },
  data: `{"prompt":"${this.prompt}","n":1,"size":"1024x1024"}`
  };

  axios.request(options).then((response)=> {
    this.objects= response.data.data;
    // console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
   }
}
