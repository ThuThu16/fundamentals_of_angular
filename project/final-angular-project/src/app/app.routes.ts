import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { QuizOrApi } from './quiz-or-api/quiz-or-api';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'calculator', component: Calculator},
  { path: 'text-editor', component: TextEditor },
  { path: 'quiz-or-api', component: QuizOrApi }
];
