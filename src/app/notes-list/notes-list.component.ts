import {Component, OnInit} from '@angular/core';
import {NoteService} from "../services/note.service";
import {Note} from "../models/note";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes!: Array<Note>;

  constructor(private notesService: NoteService) {
  }

  ngOnInit(): void {
    this.notesService.notes.subscribe(res => {
      this.notes = res;
    })
  }

}
