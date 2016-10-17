import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "new-task",
  template: `
  <h3>New Task</h3>
  <div>
    <label>Enter Task Description</label>
    <input #newDescription>
  </div>
  <div>
    <label>Enter Task ID:</label>
    <input #newId>
    <button (click)="
      addClicked(newDescription.value, newId.value);
      newDescription.value='';
      newId.value='';
    ">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number) {
    let newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}