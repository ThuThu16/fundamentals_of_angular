import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, CommonModule } from '@angular/common';
import { FirstpipesComponent } from './firstpipes/firstpipes';
import { JsonpipeComponent } from './jsonpipe/jsonpipe';
import { CustompipeComponent } from './custompipe/custompipe'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, JsonPipe, FirstpipesComponent, JsonpipeComponent, CustompipeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'pipesapp';
}
