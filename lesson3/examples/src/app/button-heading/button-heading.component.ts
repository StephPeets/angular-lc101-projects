import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-heading',
  templateUrl: './button-heading.component.html',
  styleUrls: ['./button-heading.component.css']
})
export class ButtonHeadingComponent implements OnInit {

  buttonHeading: string = "Buttons";
  
  constructor() { }

  ngOnInit() {
  }

}
