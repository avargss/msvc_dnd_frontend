import { Component } from '@angular/core';
import { SpellService } from '../spellService/spells';
import { NgFor, NgIf } from '@angular/common';

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
    this.spellService.getSpells().subscribe(
      response => {
       this.spells = response.results.slice(0, 10);
       this.mostrarTabla = true
        console.log(this.spells);
      },
      error => {
        console.error("Error loading spells", error); 
        this.spells = []; 
        this.mostrarTabla = false;

      }
    );
  }
}

