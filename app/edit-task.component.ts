import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "edit-task",
  template: `
  <div *ngIf="childSelectedTask">
    <h2>Edit Task:</h2>
    <div>
      <label>Description: </label>
      <input [(ngModel)]="childSelectedTask.description" class="form-control">
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="childSelectedTask.id" class="form-control">
      <button (click)="doneClicked()" class="btn btn-success">Done</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
