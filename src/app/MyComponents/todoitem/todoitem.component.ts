import { Component,Input } from '@angular/core';
import {Todo} from 'src/app/Todo'
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo:Todo;
}
