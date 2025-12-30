import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrotaComponent } from './pages/frota/frota.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NossaFrotaComponent } from './pages/nossa-frota/nossa-frota.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'nossa-frota', component: NossaFrotaComponent },
    { path: 'grupo/:id', component: FrotaComponent },
];