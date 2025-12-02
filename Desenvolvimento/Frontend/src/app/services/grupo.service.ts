import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private apiUrl = 'http://localhost:3000/grupos'; 

  constructor(private http: HttpClient) {}

  listar(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

  obterPorId(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }
}