

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { MonsterComponent } from './monster/monster';
import { SpellsComponent } from './spells/spells';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'monster',
        component: MonsterComponent,
    },
 
    {
        path: 'spells',
        component: SpellsComponent,
    } 

    
];
