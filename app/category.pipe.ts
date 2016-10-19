import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task.model";

@Pipe ({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Task[], desiredCategory, categories) {
    let output: Task[] = [];
    console.log(categories);
    if (desiredCategory !== "All") {
      categories.forEach(function(category) {
        if (desiredCategory === category) {
          input.forEach(function(task) {
            if (task.category === desiredCategory) {
              output.push(task);
            }
          });
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
