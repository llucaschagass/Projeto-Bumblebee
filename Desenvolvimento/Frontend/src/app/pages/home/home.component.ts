import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  grupos: Grupo[] = [];

  constructor(private grupoService: GrupoService) {}

  ngOnInit() {
    this.carregarGrupos();
  }

  carregarGrupos() {
    this.grupoService.listar().subscribe(dados => this.grupos = dados);
  }
}