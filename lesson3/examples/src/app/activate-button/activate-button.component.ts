import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activate-button',
  templateUrl: './activate-button.component.html',
  styleUrls: ['./activate-button.component.css']
})
export class ActivateButtonComponent implements OnInit {
  goldBool: boolean = true;
  silverBool: boolean = true;
  copperBool: boolean = true;

  constructor() { }

  ngOnInit() { }

  activate() {
     this.goldBool = true;
     this.silverBool = true;
     this.copperBool = true;
  }
}