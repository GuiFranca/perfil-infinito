import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardSelectionComponent } from './components/card-selection/card-selection.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardSelectionComponent
  }
];
