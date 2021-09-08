import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Exercises: Angular Lesson 3';
   color = 'green';
   height = 0;
   width = 0;
   message = 'Space shuttle ready for takeoff!';

   afterTakeOff: boolean = false;
   takeOff: boolean = false;
   outOfBounds: boolean[] = [false, false, false, false];

rocketBoundaries(rocketImage) {
   let bottomDist = parseInt(rocketImage.style.bottom);
   if (this.height >= 320000) {
      this.outOfBounds[1] = true;
   } else {
      this.outOfBounds[1] = false;
   }
   if (bottomDist > 310) {
      this.outOfBounds[0] = true;
   } else {
      this.outOfBounds[0] = false;
   }
   if (bottomDist <= 40 || bottomDist >= 270) {
      rocketImage.style.backgroundColor = 'orange';
   } else {
      rocketImage.style.backgroundColor = "";
   }
}


   moveRocket(rocketImage, direction) {
      this.rocketBoundaries(rocketImage);
      if (direction === 'up') {

         let moveup = (parseInt(rocketImage.style.bottom) + 10) + 'px';

         rocketImage.style.bottom = moveup;
         this.height = this.height + 10000;


      } else if (direction === 'down') {

         let movement = (parseInt(rocketImage.style.bottom) - 10) + 'px';
         rocketImage.style.bottom = movement;
         this.height = this.height - 10000;


      } else if (direction === 'right') {
         if (parseInt(rocketImage.style.left) >= 450) {
            this.outOfBounds[2] = true;
         } else if (parseInt(rocketImage.style.left) >= 400) {
            rocketImage.style.backgroundColor = 'orange';
         }
         let movement = parseInt(rocketImage.style.left) + 10 + 'px';
         rocketImage.style.left = movement;
         rocketImage.style.backgroundColor = 'transparent';
         this.width = this.width + 10000;
      } else if (direction === 'left') {
         let movement = (parseInt(rocketImage.style.left) - 10) + 'px';
         rocketImage.style.left = movement;
         this.width = this.width - 10000;
      }
   }


   handleTakeOff(rocketImage) {
      let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
      if (result) {
         this.color = 'blue';
         this.height = 50000;
         this.width = 0;
         this.message = 'Shuttle in flight.';
         this.takeOff = true;
         this.afterTakeOff = true;
         let movement = parseInt(rocketImage.style.bottom) + 50 + 'px';
         rocketImage.style.bottom = movement;
      }
   }

   handleLanding() {
      // let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
      // if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Shuttle has safely landed.';
      this.afterTakeOff = false;
      // }
   }

   handleAbortMission() {
      let result = window.confirm('Are you sure you want to abort this mission?');
      if (result) {
         this.color = 'darkRed';
         this.height = 0;
         this.width = 0;
         this.message = `Mission aborted. Note: Houston was of no help.`;
         this.afterTakeOff = false;
      }
   }

}
