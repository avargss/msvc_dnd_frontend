import { Component } from '@angular/core';

@Component({
  selector: 'app-spells',
  imports: [],
  standalone: true,
  templateUrl: './spells.html',
  styleUrl: './spells.scss'
})
export class SpellsComponent {
  onClick() {
  console.log('Boton pulsado!');
}
}
