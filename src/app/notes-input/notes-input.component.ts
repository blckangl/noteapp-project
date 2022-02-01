import {Component, OnInit} from '@angular/core';
import {NoteService} from "../services/note.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.scss']
})
export class NotesInputComponent implements OnInit {

  categories : Observable<Array<string>>;
  constructor(private noteService: NoteService) {
    this.categories = noteService.categories;
  }

  ngOnInit(): void {
  }

  addNote(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement,categoryInput:HTMLSelectElement) {
    if(!titleInput.value || !contentInput.value){
      return;
    }
    console.log("selected category is ",categoryInput.value);
    let note = {
      title: titleInput.value,
      content: contentInput.value,
      category: categoryInput.value,
      isArchived:false,
      id:0
    }
    this.noteService.AddNote(note);
    titleInput.value = '';
    contentInput.value = '';
    console.log(note);
  }
}
