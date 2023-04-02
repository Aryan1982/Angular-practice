import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  todos:Todo[];

  constructor(){
    this.todos=[
      {
        sno:1,
        title:"Scheme1",
        dsc:"test1",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      },
      {
        sno:2,
        title:"Scheme2",
        dsc:"test2adfa",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      },
      {
        sno:3,
        title:"Scheme3",
        dsc:"test3adfa",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      },
      {
        sno:4,
        title:"Scheme3",
        dsc:"testasdfsd",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      },
      {
        sno:5,
        title:"Scheme3",
        dsc:"testadfsdf",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      },
      {
        sno:6,
        title:"Scheme3",
        dsc:"testasdfasdfd",
        active:true,
        link:"https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg"
      }
    ]
  }
  

  deleteTodo(todo:Todo){
    // alert(todo)
    // console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1);
  }
}
