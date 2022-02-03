import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../models/note";
import {NoteService} from "../services/note.service";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-element',
  templateUrl: './note-element.component.html',
  styleUrls: ['./note-element.component.scss']
})
export class NoteElementComponent implements OnInit {
  faEdit = faEdit;
  faArchive = faArchive;
  faMinusCircle = faMinusCircle;
  @ViewChild('modal') modal!: ElementRef;
  @Input() note!: Note;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  changeNoteStatus(event: any) {
    console.log(event.target.checked);

    this.noteService.changeStatus(this.note, event.target.checked)
  }

  deleteNote() {
    this.noteService.deleteNote(this.note);
  }

  updateNote(titleInput: HTMLInputElement, contentInput: HTMLTextAreaElement) {

    if (titleInput.value.length == 0 || contentInput.value.length == 0) {
      return;
    }
    let currentNote: Note = {...this.note};
    currentNote.title = titleInput.value;
    currentNote.content = contentInput.value;
    this.noteService.updateNote(currentNote)
    this.closeEditModal();

  }

  showEditModal() {
    this.modal.nativeElement.classList.add('show')
  }

  closeEditModal() {
    this.modal.nativeElement.classList.remove('show')

  }

  archiveNote() {
      this.noteService.archiveNote(this.note,!this.note.isArchived)

  }
}
