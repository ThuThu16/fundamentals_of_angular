import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrls: ['./text-editor.css']
})
export class TextEditor {
  text: string = '';

  toUpper() {
    this.text = this.text.toUpperCase();
  }

  toLower() {
    this.text = this.text.toLowerCase();
  }

  clearText() {
    this.text = '';
  }
}
