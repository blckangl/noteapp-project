import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from "../services/note.service";
import {Note} from "../models/note";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  @Input() notes!: Array<Note>;

  constructor() {
  }

  ngOnInit(): void {

  }

}
