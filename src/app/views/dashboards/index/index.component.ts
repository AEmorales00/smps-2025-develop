import { AsistentesInterface } from './../../../models/asistentes.model';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { IndexService } from './index.service';
import { RouterModule } from '@angular/router'; // ✅ Ya agregado

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    RouterModule, // ✅ Ya agregado
  ],
  templateUrl: './index.component.html',
  styles: ``
})
export class IndexComponent {
  todoData: any;
  totalIngresos: number = 0;
  asistentesList: AsistentesInterface[] = [];
  esperados: number = 300;
  registrados: number = 0;
  faltantes: number = 0;
  comment: string = '';

  constructor(private indexService: IndexService) {}

  ngOnInit(): void {
    this.getAsistentes();
  }

  getAsistentes() {
    this.indexService.getAsistentes()
      .then(response => {
        this.asistentesList = response;
        this.registrados = response.length;
        this.faltantes = this.esperados - this.registrados;
      })
      .catch(error => {
        console.error('Error al obtener asistentes:', error);
        alert('❌ No se pudieron cargar los asistentes.');
      });
  }

  confirmarPago(participantId: number) {
    if (!confirm('¿Seguro que deseas confirmar este participante?')) return;
    
    const comment = prompt('¿Deseas agregar un comentario para este participante?') || '';
  
    this.indexService.confirmarPago(participantId, comment)
      .then(() => {
        alert('¡Participante confirmado exitosamente! ✅');
        this.indexService.downloadCertificado(participantId);
        this.getAsistentes();
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Error al confirmar participante.');
      });
  }
  confirmarParticipante(participantId: number) {
    if (!confirm('¿Estás seguro de confirmar este participante?')) return;
    
    const comment = prompt('¿Deseas agregar un comentario para este participante?') || '';
  
    this.indexService.confirmarPago(participantId, comment)
      .then(() => {
        alert('✅ Participante confirmado exitosamente.');
        this.indexService.downloadCertificado(participantId);
        this.getAsistentes();
      })
      .catch((error) => {
        console.error('Error al confirmar participante:', error);
        alert('❌ Ocurrió un error al confirmar el participante.');
      });
  }
  
  
}
