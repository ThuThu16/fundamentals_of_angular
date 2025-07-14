import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather';
import { Yesterday } from './yesterday/yesterday';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, WeatherComponent, Yesterday],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Fundamentals of Angular');
  protected readonly name = signal('Thin Thu Thu Thaw');
  protected readonly yesterdayWeather = signal('Yesterday was 18 degrees and cloudy.');

}
