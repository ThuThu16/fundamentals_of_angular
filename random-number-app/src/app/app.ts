import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Randomizer } from './randomizer/randomizer'; 
import { Divider } from './divider/divider'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Randomizer, Divider],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Randomizer App');

  // Create a signal to store the result
  protected readonly result = signal<number>(0);

  // Method that will be triggered when Randomizer emits a result
  updateResult(newValue: number) {
    this.result.set(newValue);
  }
}

