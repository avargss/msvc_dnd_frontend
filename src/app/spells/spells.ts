import { Component } from '@angular/core';
import { SpellService } from '../spellService/spells';
import { NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-spells',
  imports: [NgFor, NgIf],
  standalone: true,
  templateUrl: './spells.html',
  styleUrls: ['./spells.scss']
})
export class SpellsComponent {
  spells: any[] = []; 
  mostrarTabla = false;

  constructor(private spellService: SpellService) {}

  accion() {
    this.spells=[];
    this.mostrarTabla=false;

    this.spellService.getSpells().subscribe(response => {
    const allSpells = response.results;
    const randomSpells = this.getRandomSpells(allSpells, 8);

    const requests = randomSpells.map(spells =>
      this.spellService.getSpellsDetails(spells.index)
    );

    forkJoin(requests).subscribe(spellsDetails => {
      this.spells = spellsDetails;
      this.mostrarTabla = true;
    });
  });
}

getRandomSpells(spells: any[],count: number):any[]{
  const shuffled= spells.sort(() =>0.5 - Math.random());
  return shuffled.slice(0, count);
}
};

  

