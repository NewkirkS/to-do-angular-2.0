import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task.model";

@Pipe ({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Task[], category) {
    let desiredCategory = category;
    let output: Task[] = [];
    
  }
}
