import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['animations./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myInterval = 7000;
  activeSlideIndex = 0;

  slides = [
    {image: 'assets/images/calf/3.jpg'},
    {image: 'assets/images/peacock/2.jpg'},
    {image: 'assets/images/zebra/1.jpg'}
  ];

  constructor() {}

  ngOnInit() {}
}
