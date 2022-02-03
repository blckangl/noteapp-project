import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, fromEvent} from "rxjs";
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements AfterViewInit {
  faBars = faBars;
  @ViewChild('searchInput') searchInput!: ElementRef;


  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngAfterViewInit(): void {

    fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(debounceTime(300)).subscribe(event => {
      this.onSearch.emit(event.target.value)
    })
  }

  toggleMenu() {
    this.onToggleMenu.emit();
  }
}
