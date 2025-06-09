
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
//import { SpellsComponent } from './spells/spells';
//import { MonsterComponent } from './monster/monster';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
   /* {
        path: 'monster',
        loadComponent: () => import('./monster/monster').then(m => m.monster),
    },
 
    {
        path: 'spells',
        loadComponent: () => import('./spells/spells').then(m=> m.spells),
 } */

    
];
