import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  grupos: Grupo[] = [];
  
  dataRetirada: string = '';
  dataDevolucao: string = '';
  
  loading = false;
  buscou = false;

  constructor(
    private grupoService: GrupoService,
    private router: Router
  ) {}

  pesquisar() {
    if (!this.dataRetirada || !this.dataDevolucao) {
      alert('Por favor, selecione as datas de retirada e devolução.');
      return;
    }

    this.loading = true;
    this.buscou = true;

    this.grupoService.pesquisarDisponibilidade(this.dataRetirada, this.dataDevolucao).subscribe({
      next: (dados) => {
        this.grupos = dados;
        this.loading = false;
        
        setTimeout(() => {
          document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        alert('Erro ao buscar disponibilidade. Tente novamente.');
      }
    });
  }

  irParaReserva(grupoId: number) {
    this.router.navigate(['/reservar'], {
      queryParams: {
        grupoId: grupoId,
        inicio: this.dataRetirada,
        fim: this.dataDevolucao
      }
    });
  }
}