import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('toggle-button-app');
  buttonColor = 'red';
  showMessage = false;
  userInput = 'Hello! You have clicked the button.';

  toggleButton() {
    this.buttonColor = this.buttonColor === 'red' ? 'blue' : 'red';
    this.showMessage = !this.showMessage;
  }
}

