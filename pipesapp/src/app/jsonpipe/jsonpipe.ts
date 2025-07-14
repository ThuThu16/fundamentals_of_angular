import { Component } from '@angular/core';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-jsonpipe',
  standalone: true,
  templateUrl: './jsonpipe.html',
  imports: [CommonModule, JsonPipe],
})
export class JsonpipeComponent {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
  testArray = [5, 15, 53, 1, 2];
}
