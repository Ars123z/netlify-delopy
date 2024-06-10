import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgClass],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  constructor(public gameService: GameService) {
    
  }

  @Input() square: any

  changePlayer() {
    this.gameService.isGameRunning= true;
    if (this.gameService.isGameRunning && this.square.state=== null) {
      this.square.state= this.gameService.activePlayer;
      this.gameService.changePlayerTurn();
    }
  }
}
