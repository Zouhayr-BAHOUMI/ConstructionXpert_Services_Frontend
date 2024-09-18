import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/interfaces/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:8020';

  constructor(private http: HttpClient) { }

  public getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/taches/`);
  }

  public addTache(tache: Tache, idProjet: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/taches/add/${idProjet}`, tache, { responseType: 'text' as 'json' });
  }

  public getTacheById(idTache: number): Observable<Tache> {
    return this.http.get<Tache>(`${this.apiUrl}/taches/idTache?idTache=${idTache}`);
  }

  public getTachesByProjet(idProjet: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/taches/projet/idProjet?idProjet=${idProjet}`);
  }

  public updateTache(idTache: number, tache: Tache): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/taches/update/${idTache}`, tache);
  }

  public deleteTache(idTache: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/taches/delete/${idTache}`);
  }
}
