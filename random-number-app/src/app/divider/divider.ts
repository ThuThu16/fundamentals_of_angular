import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.html',
})
export class Divider {
  @Input() numberToDivide: number = 0;
  divisor = signal<number>(2);
  divisionResult = signal<number | null>(null);

  updateDivisor(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.divisor.set(Number(target.value));
  }

  divide() {
    if (this.divisor() !== 0) {
      this.divisionResult.set(this.numberToDivide / this.divisor());
    }
  }
}
