import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randomizer.html',
})
export class Randomizer {
  number = signal<number | null>(null);
  inputValue = signal<number>(0);
  result = signal<number | null>(null);

  @Output() resultGenerated = new EventEmitter<number>(); 

  generate() {
    const random = Math.floor(Math.random() * 100) + 1;
    this.number.set(random);
    const total = random + this.inputValue();
    this.result.set(total);
    this.resultGenerated.emit(total); 
  }

  updateInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue.set(Number(target.value));
  }
}
