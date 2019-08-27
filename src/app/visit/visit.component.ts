import { Component } from '@angular/core';
@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {
  visitdetails = visitdetails;

  share() {
    window.alert('The event has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the event is a week away');
  }

}
