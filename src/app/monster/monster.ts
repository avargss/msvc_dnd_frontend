import { Component} from '@angular/core';
import { MonsterService } from '../monServices/monster';
import { CommonModule, NgFor, NgIf } from '@angular/common';


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

  accion(){
    console.log(`Boton " ver monstruos" `);
    this.monsterService.getMonster().subscribe( response =>{
      this.monsters = response.results;
      this.mostrarTabla =true;
    });
    
  }
}
  

