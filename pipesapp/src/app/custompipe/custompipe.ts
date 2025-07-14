import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StringCleanerPipe } from '../string-cleaner-pipe'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custompipe',
  standalone: true,
  imports: [CommonModule, FormsModule, StringCleanerPipe],
  templateUrl: './custompipe.html'
})
export class CustompipeComponent {
  originalText: string = '';
}

