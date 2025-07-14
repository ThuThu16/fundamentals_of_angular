import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
// Import all 4 components 
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { QuizOrApi } from './quiz-or-api/quiz-or-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    CommonModule,
    Home,
    Calculator,
    TextEditor,
    QuizOrApi
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
