import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo.model';

@Injectable({ providedIn: 'root' })
export class GrupoService {
  private apiUrl = 'http://localhost:3000/grupos'; 

  constructor(private http: HttpClient) {}

  listar(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  pesquisarDisponibilidade(inicio: string, fim: string): Observable<Grupo[]> {
    let params = new HttpParams()
        .set('inicio', inicio)
        .set('fim', fim);

    return this.http.get<Grupo[]>(`${this.apiUrl}/disponibilidade`, { params });
  }

  obterPorId(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }
}