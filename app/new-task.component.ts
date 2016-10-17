import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "new-task",
  template: `
  <h3>New Task</h3>
  <div>
    <label hidden>Enter Task Description</label>
    <input #newDescription placeholder="Task Description" class="form-control">
  </div>
  <div>
    <label hidden>Enter Task ID:</label>
    <input #newId placeholder="Task ID" class="form-control">
  </div>
  <div>
    <label hidden>Select a Priority:</label>
    <input #newPriority placeholder="Priority" class="form-control">
  </div>
  <div>
    <label hidden>Enter a Category:</label>
    <input #newCategory placeholder="Category" class="form-control">
  </div>
  <button (click)="
  addClicked(newDescription.value, newId.value, newPriority.value, newCategory.value);
  newDescription.value='';
  newId.value='';
  newPriority.value='';
  newCategory.value='';
  " class="btn btn-success">Add</button>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string, category: string) {
    let newTaskToAdd: Task = new Task(description, id, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
