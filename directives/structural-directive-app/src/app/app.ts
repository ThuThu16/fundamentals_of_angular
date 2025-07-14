import { Component } from '@angular/core';
import { ChangeBgDirective } from './change-bg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChangeBgDirective],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'structural-directive-app';

  // 👇 Add this part
  count = 0;

  incrementCount() {
    this.count++;
  }
}
