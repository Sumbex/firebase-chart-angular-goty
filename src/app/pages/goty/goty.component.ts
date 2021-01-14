import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private game: GameService) {}

  ngOnInit(): void {
    this.game.getJuegos().subscribe((res) => {
      this.juegos = res;
    });
  }

  votar(juego: Game) {
    this.game.votar(juego.id).subscribe((res: any) => {
      if (res.ok) {
        return Swal.fire('Gracias', res.message, 'success');
      } else {
        return Swal.fire('Error', res.message, 'warning');
      }
    });
  }
}
