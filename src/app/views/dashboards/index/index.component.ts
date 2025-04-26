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
  asistentesList: AsistentesInterface[] = [];
  esperados: number = 300;
  registrados: number = 0;
  faltantes: number = 0;

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
  
    this.indexService.confirmarPago(participantId)
      .then(() => {
        alert('¡Participante confirmado exitosamente! ✅');
        this.indexService.downloadCertificado(participantId); // ⬅️ Aquí se dispara la descarga
        this.getAsistentes(); // Refrescar la tabla
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Error al confirmar participante.');
      });
  }
  confirmarParticipante(participantId: number) {
    if (!confirm('¿Estás seguro de confirmar este participante?')) return;
  
    this.indexService.confirmarPago(participantId)
      .then(() => {
        alert('✅ Participante confirmado exitosamente.');
  
        // 🔥 Llamar descarga y procesar el archivo
        this.indexService.downloadCertificado(participantId)
          .then((response) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `certificado_${participantId}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Error al descargar certificado:', error);
            alert('⚠️ Error al descargar el certificado.');
          });
  
        this.getAsistentes(); // refrescar tabla
      })
      .catch((error) => {
        console.error('Error al confirmar participante:', error);
        alert('❌ Ocurrió un error al confirmar el participante.');
      });
  }
  
}
