import { PipeTransform, Pipe } from "@angular/core";
import { Task } from "./task.model";

@Pipe({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], priority) {
    let desiredPriority = priority;
  }
}
