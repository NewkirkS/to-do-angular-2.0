import { Component, Output, Input, EventEmitter } from "@angular/core";
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
    <select #newPriority class="form-control task-dropdown">
      <option disabled selected>Priority</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  </div>
  <div>
    <select #newCategory class="form-control task-dropdown">
      <option disabled selected>Category</option>
      <option *ngFor="let currentCategory of childCategoryList" [value]="currentCategory">
        {{currentCategory}}
      </option>
    </select>
  </div>
  <button (click)="
  addClicked(newDescription.value, newPriority.value, newCategory.value);
  newDescription.value='';
  " class="btn btn-success"
  >Add</button>
  `
})

export class NewTaskComponent {
  public selectedCategory: string = "Home";
  @Input() childCategoryList: string[];
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, priority: string, category: string) {
    let newTaskToAdd: Task = new Task(description, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
