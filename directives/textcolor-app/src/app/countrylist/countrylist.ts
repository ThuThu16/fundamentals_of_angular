import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countrylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countrylist.html'
})
export class CountrylistComponent {
  items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];
}
