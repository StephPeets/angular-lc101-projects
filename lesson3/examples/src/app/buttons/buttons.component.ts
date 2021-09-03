import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

   buttonHeading: string = "Buttons";
   inactive: boolean = false;
   buttonBool: boolean[] = [true, true, true];

   constructor() { }

   ngOnInit() { }

   reactivate = () => {
      this.buttonBool = [true, true, true];
   }
}
