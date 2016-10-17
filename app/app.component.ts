import { Component } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <div class ="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>My First Angular 2 App</h1>
        <task-list
          [childTaskList]="masterTaskList"
          (clickSender)="showDetails($event)"
        ></task-list>
        <edit-task
          [childSelectedTask]="selectedTask"
          (doneClickedSender)="finishedEditing()"
        ></edit-task>
        <new-task
          (newTaskSender)="addTask($event)"
        ></new-task>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do List App.", 0),
    new Task("Learn Kung Fu.", 1),
    new Task("Learn calligraphy.", 2),
    new Task("Clean fridge.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
