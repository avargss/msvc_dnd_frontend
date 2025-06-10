import { Component} from '@angular/core';
import { MonsterService } from '../monServices/monster';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-monster',
  imports: [CommonModule, NgFor, NgIf],
  standalone:true,
  templateUrl: './monster.html',
  styleUrl: './monster.scss'
})
export class MonsterComponent {

  monsters: any []= [];
  mostrarTabla:boolean = false;
  constructor(private monsterService: MonsterService){}

  accion() {
  console.log(`Botón "Ver monstruos" presionado`);
  this.monsters = [];
  this.mostrarTabla = false;

  this.monsterService.getMonster().subscribe(response => {
    const allMonsters = response.results;
    const randomMonsters = this.getRandomMonsters(allMonsters, 10);

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

}
  

