import {Component, OnInit} from '@angular/core';
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.scss']
})
export class NotesInputComponent implements OnInit {

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  addNote(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement) {
    let note = {
      title: titleInput.value,
      content: contentInput.value,
      category: 'reunion',
      id:0
    }
    this.noteService.AddNote(note);
    console.log(note);
  }
}
