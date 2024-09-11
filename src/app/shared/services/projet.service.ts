import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/interfaces/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  

  private apiUrl = 'http://localhost:8020';

  constructor(private http:HttpClient) { }

  public getProjets (): Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.apiUrl}/projets/`);
  }

  public addProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.apiUrl}/projets/add`, projet, { responseType: 'text' as 'json' });
  }

  public getProjetById(idProjet: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.apiUrl}/projets/idprojet?idprojet=${idProjet}`);
  }

  public updateProjet(idProjet: number, projet: Projet): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/projets/update/${idProjet}`, projet);
  }
}
