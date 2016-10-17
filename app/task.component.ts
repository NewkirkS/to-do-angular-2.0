import { Component } from "@angular/core";
import { Task } from "./task.model";

@Component({
    selector: "task-display",
    inputs: ["task"],
  template: `
  <div>
    <label>{{ task.description }}</label>
    <br>
    <label *ngIf="task.done === true">
      <input type="checkbox" checked (click)="toggleDone(false)"/> Completed
    </label>
    <label *ngIf="task.done === false">
      <input type="checkbox" (click)="toggleDone(true)"/> Completed
    </label>
    <p>Priority: {{ task.priority }}</p>
    <p>Category: {{ task.category }}</p>
  </div>
  `
})
export class TaskComponent {
  public task: Task;
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
  }
}
