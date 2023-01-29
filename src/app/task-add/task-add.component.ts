import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  @Output() addTaskEventEmitter = new EventEmitter()
  taskForm: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle : ["", [Validators.required]]
    })
  }

  onKeyPress($event:any) {
    console.log($event)
    if (this.taskForm.valid){
      this.addTaskEventEmitter.emit(this.taskForm.value)
      this.taskForm.patchValue({
        taskTitle: ''
      })
    } else {
      alert ('enter required fields please')
    }
  }

}
