import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "new-category",
  template: `
  <h3>New Category</h3>
  <div>
    <label hidden>Enter Category Description</label>
    <input #newDescription placeholder="Category Description" class="form-control">
  </div>
  <button (click)="
  addClicked(newDescription.value);
  newDescription.value='';
  " class="btn btn-success">Add</button>
  `
})

export class NewCategoryComponent {
  @Output() newCategorySender = new EventEmitter();
  addClicked(description: string) {
    let newCategoryToAdd: string = description;
    this.newCategorySender.emit(newCategoryToAdd);
  }
}
