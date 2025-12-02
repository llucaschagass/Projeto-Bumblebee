import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrotaComponent } from './pages/frota/frota.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grupo/:id', component: FrotaComponent },
];