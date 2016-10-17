import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AlbumsListComponent} from "./albums-list.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AlbumsListComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
