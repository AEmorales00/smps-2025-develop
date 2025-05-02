import { ResultadoBusqueda } from '@/app/models/resultadoBusqueda.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BuscadorService } from './buscador.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IndexService } from '../index/index.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'buscador',
  templateUrl: 'buscador.component.html',
  imports: [CommonModule],
})

export class BuscadorComponent implements OnInit {
  listado$: Observable<ResultadoBusqueda[]> = new Observable<ResultadoBusqueda[]>();

  todoData: any;
  totalIngresos: number = 0;
  esperados: number = 300;
  registrados: number = 0;
  faltantes: number = 0;
  comment: string = '';
  comprobanteUrl: string | null = null;

  constructor(private buscadorService: BuscadorService,
    private indexService: IndexService,
    private modalService: NgbModal
  ) {
    this.listado$= this.buscadorService.listado$;
  }



  ngOnInit() {}


  confirmarPago(participantId: number) {
    if (!confirm('¿Seguro que deseas confirmar este participante?')) return;

    const comment = prompt('¿Deseas agregar un comentario para este participante?') || '';

    this.indexService.confirmarPago(participantId, comment)
      .then(() => {
        alert('¡Participante confirmado exitosamente! ✅');
        this.indexService.downloadCertificado(participantId);
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
      })
      .catch((error) => {
        console.error('Error al confirmar participante:', error);
        alert('❌ Ocurrió un error al confirmar el participante.');
      });
  }

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
    this.indexService.getComprobante('umg1.png')
      .then((blob: Blob) => {
        this.comprobanteUrl = URL.createObjectURL(blob);
        this.modalService.open(content, options);
      })
      .catch((err) => {
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


}
