import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, fromEvent} from "rxjs";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;


  @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngAfterViewInit(): void {

    fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(event => {
      this.onSearch.emit(event.target.value)
    })
  }

}
