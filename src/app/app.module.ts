import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotesInputComponent } from './notes-input/notes-input.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteElementComponent } from './note-element/note-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomePageComponent,
    NotesInputComponent,
    NotesListComponent,
    NoteElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
