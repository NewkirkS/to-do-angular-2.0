import { PipeTransform, Pipe } from "@angular/core";
import { Task } from "./task.model";

@Pipe({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], priority) {
    let desiredPriority = priority;
    let output: Task[] = [];
    if (desiredPriority === "High") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "Medium") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "Low") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
