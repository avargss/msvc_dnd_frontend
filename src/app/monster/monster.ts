import { Component } from '@angular/core';
import { MonsterService } from '../monServices/monster';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-monster',
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  standalone: true,
  templateUrl: './monster.html',
  styleUrl: './monster.scss'
})
export class MonsterComponent {

  monsters: any[] = [];
  mostrarTabla: boolean = false;
  constructor(private monsterService: MonsterService) { }

  monstruoSeleccionado: any = null;
  mostrarPopup: boolean = false;


  accion() {
    console.log(`Botón "Ver monstruos" presionado`);
    this.monsters = [];
    this.mostrarTabla = false;

    this.monsterService.getMonster().subscribe(response => {
      const allMonsters = response.results;
      const randomMonsters = this.getRandomMonsters(allMonsters, 6);

      const requests = randomMonsters.map(monster =>
        this.monsterService.getMonsterDetails(monster.index)
      );

      forkJoin(requests).subscribe(monsterDetails => {
        this.monsters = monsterDetails;
        this.mostrarTabla = true;
      });
    });
  }


  getRandomMonsters(monsters: any[], count: number): any[] {
    const shuffled = monsters.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  mostrarDetalles(monster: any) {
    Swal.fire({
      title: monster.name,
      html: `
      <p><strong>Size:</strong> ${monster.size}</p>
      <p><strong>Type:</strong> ${monster.type}</p>
      <p><strong>Alignment:</strong> ${monster.alignment}</p>
      <p><strong>Hit Points:</strong> ${monster.hit_points}</p>
    `,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#3085d6',
      background: '#fff',
    });
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }


}


