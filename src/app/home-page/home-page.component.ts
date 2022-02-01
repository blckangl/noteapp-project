import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Note} from "../models/note";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  list!: Array<Note>;
  term = "";
  category="";

  constructor(private router: ActivatedRoute, private noteService: NoteService) {
    this.router.queryParams.subscribe(res => {
      let category = res['category']
      this.category = category;
      noteService.getNotes(category,this.term).subscribe(list => {
        this.list = list;
      })

    })
  }

  ngOnInit(): void {
  }

  searchByTerm(term: string) {
    this.term = term;

    console.log(term)
    this.noteService.getNotes(this.category,term).subscribe(list => {
      console.log(list)
      console.log("term is ",term)
      this.list = list;
    })

  }
}
