import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <div class ="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>My First Angular 2 App</h1>
        <albums></albums>
        <div *ngFor="let currentTask of tasks">
          <h3>{{ currentTask.description }}</h3>
          <button (click)="showDetails(currentTask)" class="btn btn-primary">Edit</button>
        </div>
        <div *ngIf="selectedTask">
          <h2>Edit Task:</h2>
          <div>
            <label>Description: </label>
            <input [(ngModel)]="selectedTask.description" class="form-control">
          </div>
          <div>
            <label>Enter Task ID:</label>
            <input [(ngModel)]="selectedTask.id" class="form-control">
            <button (click)="finishedEditing()" class="btn btn-success">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Create To-Do List App.", 0),
    new Task("Learn Kung Fu.", 1),
    new Task("Learn caligraphy.", 2),
    new Task("Clean fridge.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
