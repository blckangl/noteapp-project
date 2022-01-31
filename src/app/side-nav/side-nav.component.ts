import { Component, OnInit } from '@angular/core';
import {NoteService} from "../services/note.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public categories : Observable<Array<string>>
  constructor(private notesService:NoteService) {
    this.categories = this.notesService.categories;

  }

  ngOnInit(): void {
  }

}
