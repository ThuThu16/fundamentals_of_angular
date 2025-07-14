import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-image.html',
  styleUrls: ['./toggle-image.css']
})
export class ToggleImageComponent {
  showImage = false;

  toggle(): void {
    this.showImage = !this.showImage;
  }
}
