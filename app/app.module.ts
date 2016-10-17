import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AlbumsListComponent} from "./albums-list.component";
import { TaskListComponent } from "./task-list.component";
import { EditTaskComponent } from "./edit-task.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumsListComponent,
    TaskListComponent,
    EditTaskComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
