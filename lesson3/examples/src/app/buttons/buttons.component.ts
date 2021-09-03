import { Component, OnInit } from '@angular/core';


@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

   goldBool: boolean = true;
   silverBool: boolean = true;
   copperBool: boolean = true;

   constructor() { }

   ngOnInit() { }

   // activate() {
   //    this.goldBool = true;
   //    this.silverBool = true;
   //    this.copperBool = true;
   // }

}



