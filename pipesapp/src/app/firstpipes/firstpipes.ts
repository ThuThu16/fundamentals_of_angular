import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-firstpipes',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, PercentPipe],
  templateUrl: './firstpipes.html',
  styleUrls: ['./firstpipes.css']
})
export class FirstpipesComponent {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}

