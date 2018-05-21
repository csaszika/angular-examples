import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', cols: 1, rows: 2 },
    { title: 'Card 2', cols: 1, rows: 3 },
    { title: 'Card 3', cols: 1, rows: 1}
  ];
}
