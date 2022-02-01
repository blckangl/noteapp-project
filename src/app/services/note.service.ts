import {Injectable} from '@angular/core';
import {Note} from "../models/note";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  INCR = 0

  _notes: BehaviorSubject<Array<Note>>;

  notes: Observable<Array<Note>>;

  _categories: BehaviorSubject<Array<string>>;
  categories: Observable<Array<string>>

  constructor() {
    const initialCategories = ['Reunion', 'Todos', 'Shopping', 'Project']
    this._categories = new BehaviorSubject<Array<string>>(initialCategories);
    this.categories = this._categories.asObservable();
    const initialStateString = localStorage.getItem("notes")
    let initialListState;
    if (initialStateString) {
      initialListState = JSON.parse(initialStateString)
    } else {
      initialListState = [];
    }
    this._notes = new BehaviorSubject<Array<Note>>(initialListState);
    this.notes = this._notes.asObservable();
    this.notes.subscribe(note => {
      console.log("notes state has been changed ", note)
      this.syncData();
    })
  }

  public AddNote(note: Note) {

    let tempNote: Note = {...note, date: new Date, id: this.INCR++, isDone: false}

    this._notes.next([tempNote, ...this._notes.value])
    console.log("creating note ", tempNote)

  }

  public changeStatus(note: Note, status: boolean) {
    let currentNote = this._notes.value.find(x => x.id == note.id);

    if (currentNote) {
      currentNote.isDone = status;
      let tempList = [...this._notes.value];
      let noteIndex = this._notes.value.findIndex(x => x.id == currentNote?.id)


      this._notes.next([...tempList.slice(0, noteIndex), currentNote, ...tempList.slice(noteIndex + 1, tempList.length)])


    }
  }

  public deleteNote(note: Note) {
    this._notes.next([...this._notes.value.filter(x => x.id != note.id)])

  }

  public getNotes(category: string | undefined = undefined, term: string): Observable<Array<Note>> {
    if (category) {
      return this.notes.pipe(map(list => list.filter(note => note.category.toLowerCase() == category.toLowerCase() && (note.title.includes(term) || note.content.includes(term)))));
    }

    return this.notes.pipe(map(list => list.filter(note => (note.title.includes(term) || note.content.includes(term)))));;

  }

  public createCategory(categoryName: string) {
    this._categories.next([...this._categories.value, categoryName])
  }

  syncData() {
    localStorage.setItem("notes", JSON.stringify(this._notes.value))
  }

}

//['5','4','3']
//...['5','4','3']     '5','4','3'

//['5',...['5','3'],'3']
