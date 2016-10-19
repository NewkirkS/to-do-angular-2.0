import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "edit-task",
  template: `
  <div *ngIf="childSelectedTask">
    <h3>Edit Task:</h3>
    <div>
      <label hidden>Description: </label>
      <input [(ngModel)]="childSelectedTask.description" class="form-control">
    </div>
    <div>
      <select [(ngModel)]="childSelectedTask.priority" class="form-control task-dropdown">
        <option disabled>Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div>
      <select [(ngModel)]="childSelectedTask.category" class="form-control task-dropdown">
        <option disabled>Category</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Hobby">Hobby</option>
      </select>
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
