import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      loadRemoteModule('users', './Component').then((m) => m.AppComponent),
  }
];
