import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from 'src/app/Todo'
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    // alert("workin")
    // console.log(todo)
  }
}
