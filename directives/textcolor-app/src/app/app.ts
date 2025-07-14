import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColorDirective } from './text-color';
import { FontSizeDirective } from './font-size';
import { ToggleImageComponent } from './toggle-image/toggle-image';
import { CountrylistComponent } from './countrylist/countrylist';
import { ProfileComponent } from './profile/profile'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextColorDirective, FontSizeDirective, ToggleImageComponent, CountrylistComponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('textcolor-app');
}
