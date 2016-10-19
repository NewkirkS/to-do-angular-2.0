import { Component } from "@angular/core";
import { Task } from "./task.model";

@Component({
  moduleId: module.id,
  selector: "my-app",
  template: `
  <div class="container">
    <div class ="row">
      <div class="col-md-12">
        <h1>My First Angular 2 App</h1>
      </div>
      <div>
      </div>
      <div class="col-md-6">
        <task-list
          [childTaskList]="masterTaskList"
          (clickSender)="showDetails($event)"
          [childCategoryList]="categories"
        ></task-list>
      </div>
      <div class="col-md-5 col-md-offset-1">
        <new-task
          (newTaskSender)="addTask($event)"
          [childCategoryList]="categories"
        ></new-task>
        <edit-task
          [childSelectedTask]="selectedTask"
          (doneClickedSender)="finishedEditing()"
        ></edit-task>
        <new-category
          (newCategorySender)="addCategory($event)"
        ></new-category>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do List App.", "High", "Home"),
    new Task("Learn Kung Fu.", "Low", "Work"),
    new Task("Learn calligraphy.", "Low", "Hobby"),
    new Task("Clean fridge.", "Medium", "Home")
  ];
  public categories: string[] = ["Home", "Work", "Hobby"];
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
  addCategory(newCategoryFromChild: string) {
    this.categories.push(newCategoryFromChild);
  }
}
