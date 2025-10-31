import { Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs';

export const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: '**', redirectTo: '' }
];