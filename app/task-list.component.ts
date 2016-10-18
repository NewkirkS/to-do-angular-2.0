import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Task } from "./task.model";
import { CompletenessPipe } from "./completeness.pipe";
import { PriorityPipe } from "./priority.pipe";

@Component({
  selector: "task-list",
  template: `
    <div class="row sort-dropdown">
      <div class="col-md-4">
        <select (change)="onCompletenessChange($event.target.value)" class="form-control">
          <option value="all">Show All</option>
          <option value="isDone">Show Done</option>
          <option value="notDone" selected="selected">Show Not Done</option>
        </select>
      </div>
      <div class="col-md-4">
        <select (change)="onPriorityChange($event.target.value)" class="form-control">
          <option selected="selected" disabled>Show by Priority</option>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority" class="tasks">
      <task-display
        [task] = "currentTask"
      ></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)" class="btn btn-primary">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedPriority: string = "";
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  onCompletenessChange(completenessFromMenu) {
    this.selectedCompleteness = completenessFromMenu;
  }
  onPriorityChange(priorityFromMenu) {
    this.selectedPriority = priorityFromMenu;
  }
}
