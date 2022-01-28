import {Injectable} from '@angular/core';
import {Note} from "../models/note";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  INCR = 0;
  initialListState: Array<Note> = [
    {
      id: this.INCR++,
      title: 'rdv',
      content: 'rdv with someone',
      category: 'reunion',
      isDone: false,
      date: new Date()
    },
    {
      id: this.INCR++,
      title: 'rdv 2',
      content: 'rdv with someone 2',
      category: 'reunion',
      isDone: true,
      date: new Date()
    }
  ];

  _notes: BehaviorSubject<Array<Note>> = new BehaviorSubject<Array<Note>>(this.initialListState)

  notes: Observable<Array<Note>> = this._notes.asObservable()

  constructor() {
  }

  public AddNote(note: Note) {

    let tempNote: Note = {...note, date: new Date, id: this.INCR++, isDone: false}

    this._notes.next([tempNote,...this._notes.value])
    console.log("creating note ", tempNote)

  }

  public changeStatus(note: Note, status: boolean){
    let currentNote = this._notes.value.find(x=>x.id==note.id);

    if(currentNote)
      currentNote.isDone = status;
  }
}

//['5','4','3']
//...['5','4','3']     '5','4','3'

//['5',...['5','3'],'3']
