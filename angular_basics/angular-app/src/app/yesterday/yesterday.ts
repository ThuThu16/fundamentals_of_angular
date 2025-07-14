import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yesterday',
  standalone: true,
  templateUrl: './yesterday.html',
  styleUrls: ['./yesterday.css']
})
export class Yesterday {
  @Input() data: string = '';
}


