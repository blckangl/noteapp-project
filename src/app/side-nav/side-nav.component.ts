import {
  AfterViewChecked, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {NoteService} from "../services/note.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input() toggle: boolean = true;
  public isOpen: boolean = true;
  public categories: Observable<Array<string>>
  @ViewChild('modal') modal!: ElementRef;

  constructor(private notesService: NoteService) {
    this.categories = this.notesService.categories;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOpen = this.toggle;
    console.log("is open", this.isOpen)
  }


  ngOnInit(): void {
  }

  addCategory(categoryInput: HTMLInputElement) {
    if (categoryInput.value.length > 0) {
      categoryInput.classList.remove('warning');
      this.notesService.createCategory(categoryInput.value);
      this.hideModal();


    } else {
      categoryInput.classList.add('warning')
    }
  }

  showModal() {
    this.modal.nativeElement.classList.add('show');
  }

  hideModal() {
    this.modal.nativeElement.classList.remove('show');
  }
}
