import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['animations./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myInterval = 1500;
  activeSlideIndex = 0;

  slides = [
    {image: 'assets/images/nature/3.jpg'},
    {image: 'assets/images/nature/2.jpg'},
    {image: 'assets/images/nature/1.jpg'}
  ];

  constructor() {}

  ngOnInit() {}
}
