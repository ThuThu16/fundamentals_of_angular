import { Routes } from '@angular/router';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience} from './experience/experience';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
];
