import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private url = environment.url;
  juegos: Game[] = [];
  constructor(private http: HttpClient) {}

  getJuegos(): Observable<Game[]> {
    if (this.juegos.length > 0) {
      return of(this.juegos);
    } else {
      return this.http
        .get<Game[]>(`${this.url}/api/goty`)
        .pipe(tap((res) => (this.juegos = res)));
    }
  }

  votar(id: string) {
    return this.http.post(`${this.url}/api/goty/${id}`, {}).pipe(
      catchError((err: HttpErrorResponse) => {
        return of(err.error);
      })
    );
  }
}
