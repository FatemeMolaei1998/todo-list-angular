import {Component, Input} from '@angular/core';
import {Task} from "../model/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tasks: Task[]

  deleteTask(task: Task) {
    let index = this.tasks.findIndex(item => item['id'] == task.id)
    this.tasks.splice(index, 1)
  }

}
