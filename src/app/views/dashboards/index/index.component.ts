import { AsistentesInterface } from './../../../models/asistentes.model';
import { Component, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { IndexService } from './index.service';
import { RouterModule } from '@angular/router'; // ✅ Ya agregado
import { NgbModal, NgbModalModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    RouterModule, // ✅ Ya agregado
    NgbModalModule
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
  comprobanteUrl: string | null = null;

  constructor(private indexService: IndexService, private modalService: NgbModal) {}

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

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions, personaId:number) {
    this.indexService.getComprobante(`comprobante_${personaId}.png`)
      .then((blob: Blob) => {
        this.comprobanteUrl = URL.createObjectURL(blob);
        this.modalService.open(content, options);
      })
      .catch((err) => {
        alert('Comprobante no encontrado .');
        console.error('Error al obtener el comprobante', err);
      });
  }


  closeModal() {
    this.modalService.dismissAll();
    if (this.comprobanteUrl) {
      URL.revokeObjectURL(this.comprobanteUrl); // 👈 Liberar memoria
      this.comprobanteUrl = null;
    }
  }

  elimanarParticipante(person_id:number){
    this.indexService.eliminarParticipante(person_id)
    .then(resonse=>{
      this.getAsistentes()
      alert('Participante Eliminado correctamente');
    })

  }


}
