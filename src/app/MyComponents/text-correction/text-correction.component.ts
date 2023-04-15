import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-text-correction',
  templateUrl: './text-correction.component.html',
  styleUrls: ['./text-correction.component.css']
})
export class TextCorrectionComponent {
  inputText:string;
  outputText:string;

  editText(){

    // console.log("loading")
    const options = {
  method: 'POST',
  url: 'https://openai80.p.rapidapi.com/edits',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '9f7c760327mshd4c0b7c94270680p141641jsn6313e25678e0',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  },
  data: `{"model":"text-davinci-edit-001","input":"${this.inputText}","instruction":"Fix the spelling mistakes"}`
  };

  axios.request(options).then((response)=> {
    this.outputText = response.data.choices[0].text
    // console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  }
}
