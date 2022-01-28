import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appIsChecked]'
})
export class IsCheckedDirective implements OnInit{
 @Input() appIsChecked!:boolean;
  constructor(private el:ElementRef) { }

  ngOnInit(): void {



    this.el.nativeElement.checked = this.appIsChecked
  }



}
