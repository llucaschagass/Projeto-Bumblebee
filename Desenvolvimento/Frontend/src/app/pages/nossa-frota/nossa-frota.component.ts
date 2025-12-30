import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'app-nossa-frota',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nossa-frota.component.html',
  styleUrl: './nossa-frota.component.scss'
})
export class NossaFrotaComponent implements OnInit {
  grupos: Grupo[] = [];
  loading = true;

  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.carregarGrupos();
  }

  carregarGrupos() {
    this.loading = true;
    this.grupoService.listar().subscribe({
      next: (dados) => {
        this.grupos = dados;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar grupos', err);
        this.loading = false;
      }
    });
  }
}
