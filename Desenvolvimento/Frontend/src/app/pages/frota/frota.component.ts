import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'app-frota',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './frota.component.html'
})
export class FrotaComponent implements OnInit {
  grupo: Grupo | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private grupoService: GrupoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.grupoService.obterPorId(+id).subscribe({
        next: (dados) => {
          this.grupo = dados;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }
}