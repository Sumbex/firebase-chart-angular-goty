import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  results: any[] = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('goty')
      .valueChanges()
      .pipe(
        map((res: Game[]) =>
          res.map(({ name, votos }) => ({ name, value: votos }))
        )
      )
      .subscribe((res) => {
        this.results = res;
      });
  }
}
