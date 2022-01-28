import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../models/note";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-element',
  templateUrl: './note-element.component.html',
  styleUrls: ['./note-element.component.scss']
})
export class NoteElementComponent implements OnInit {

  @Input() note!:Note;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  changeNoteStatus(event: any) {
     console.log(event.target.checked);

     this.noteService.changeStatus(this.note,event.target.checked)
  }
}
