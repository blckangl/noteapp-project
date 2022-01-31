import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Note} from "../models/note";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   list!:Array<Note>;
  constructor(private router:ActivatedRoute,private noteService:NoteService) {
    this.router.queryParams.subscribe(res=>{
      let category = res['category']
     noteService.getNotes(category).subscribe(list=>{
       this.list = list;
     })

    })
  }

  ngOnInit(): void {
  }

}
