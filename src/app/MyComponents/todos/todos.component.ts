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
        title:"helloo1",
        dsc:"test1",
        active:true,
      },
      {
        sno:2,
        title:"helloo2",
        dsc:"test2adfa",
        active:true,
      },
      {
        sno:3,
        title:"helloo3",
        dsc:"test3adfa",
        active:true,
      },
      {
        sno:4,
        title:"helloo3",
        dsc:"testasdfsd",
        active:true,
      },
      {
        sno:5,
        title:"helloo3",
        dsc:"testadfsdf",
        active:true,
      },
      {
        sno:6,
        title:"helloo3",
        dsc:"testasdfasdfd",
        active:true,
      }
    ]
  }
  // ngOnInit():void{

  // }
}
