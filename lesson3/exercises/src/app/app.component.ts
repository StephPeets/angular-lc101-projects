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

  // movement = parseInt(img.rocketImage.style.left) + 10 + 'px'; THIS IS WHERE YOU LEFT OFF


  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 handleLanding() {
  // let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  // if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle has safely landed.';
  // }
}

 handleAbortMission() {
  let result = window.confirm('Are you sure you want to abort this mission?');
  if (result) {
     this.color = 'darkRed';
     this.height = 0;
     this.width = 0;
     this.message = `Mission aborted. Note: Houston was of no help.`;
  }
}

}
