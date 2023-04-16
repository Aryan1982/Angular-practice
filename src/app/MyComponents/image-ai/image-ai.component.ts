import { Component } from '@angular/core';
import axios from 'axios';
import * as dotenv from 'dotenv';

@Component({
  selector: 'app-image-ai',
  templateUrl: './image-ai.component.html',
  styleUrls: ['./image-ai.component.css']
})
// dotenv.config();
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
    'X-RapidAPI-Key': '0a1e34d952msh02e830b8ce7b222p115ec2jsn9533e0a4a51c',
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
