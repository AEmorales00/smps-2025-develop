import { datosUsuarioAsistenteDTO, FormModel } from '@/app/models/registroAsistenteSimposio.model';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetodoPago, rolesList, RolUsuarioInterface, Tallas, tallasList, metodoPagos } from '@views/auth/registro/datos-seleccionable';
import { RegistroAsistentesService } from '@views/auth/registro/registro.service';
import { registroAsistenteService } from './resgistro-asistente.service';

@Component({
  selector: 'registro-asistente',
  templateUrl: 'registro-asistente.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BreadcrumbComponent],
})

export class RegistroAsistenComponent implements OnInit {

  rolUsuario: RolUsuarioInterface[] = rolesList;
  listMetodosPago: MetodoPago[] = metodoPagos
  registroForm: FormGroup;
  selectedFile: File | null = null;  // Almacena el archivo seleccionado
  tallas: Tallas[] = tallasList
  participant_type_student= rolesList[0].descripcion
  @ViewChild('fileInput') fileInput!: ElementRef;

  private modalService = inject(NgbModal)
  @ViewChild('standardModal') standardModal: any;
  isLoading = false;
  file:any

  constructor(private fb: FormBuilder, private registroAsistentesService: registroAsistenteService) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      rolId: ['', Validators.required],
      birth_date: ['', Validators.required],
      comprobante: [null, Validators.required],  // Campo para archivo
      talla: ['', Validators.required ],
      telefono: ['', Validators.required],
      carnet: [''],
      metodo_pago: ['', Validators.required],
      participant_type: ['estudiante_umg', Validators.required] // Valor predeterminado válido
    });
  }


  ngOnInit() { }


  onFileSelected(event: any): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        this.selectedFile = file;
        this.registroForm.patchValue({
          comprobante: file
        });

        // Asegurar que el formulario detecte el cambio
        this.registroForm.get('comprobante')?.updateValueAndValidity();

        console.log('Archivo seleccionado:', file);
      }
    }

    onSubmit(): void {
      if (this.registroForm.valid) {
        this.isLoading = true;
        const formModel: FormModel = this.registroForm.value;
        const dto = new datosUsuarioAsistenteDTO(formModel);
        const formData = dto.toFormData();

        this.registroAsistentesService.postUsuarioAsistente(formData)
          .then(res =>{
            this.isLoading = false;
            this.modalService.open(this.standardModal);
            this.file = null;
            this.selectedFile = null;
            this.fileInput.nativeElement.value = '';
            this.registroForm.reset();
          })
      }
    }
}
