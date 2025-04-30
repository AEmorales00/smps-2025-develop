import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { rolesList, RolUsuarioInterface, tallasList, Tallas } from './datos-seleccionable';
import { CommonModule } from '@angular/common';
import { datosUsuarioAsistenteDTO, FormModel } from '@/app/models/registroAsistenteSimposio.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroAsistentesService } from './registro.service';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '@core/services/utils.service';

@Component({
  selector: 'registro-usuarios',
  templateUrl: 'registro-usuarios.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbCarouselModule],
})
export class RegistroUsuariosComponent implements OnInit {
  rolUsuario: RolUsuarioInterface[] = rolesList;
  registroForm: FormGroup;
  selectedFile: File | null = null;  // Almacena el archivo seleccionado
  tallas: Tallas[] = tallasList
  participant_type_student= rolesList[0].descripcion
  private modalService = inject(NgbModal)
  @ViewChild('standardModal') standardModal: any;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private registroAsistentesService: RegistroAsistentesService,
    private utilsService:UtilsService,

  ) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      rolId: ['', Validators.required],
      birth_date: ['', Validators.required],
      comprobante: [null, Validators.required],  // Campo para archivo
      talla: ['', Validators.required ],
      telefono: ['', Validators.required],
      carnet: ['']
    });
  }

  ngOnInit() {}

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
      this.isLoading = true; // Mostrar loading

      const formModel: FormModel = this.registroForm.value;
      const dto = new datosUsuarioAsistenteDTO(formModel);
      const formData = dto.toFormData();

      this.registroAsistentesService.postUsuarioAsistente(formData)
        .then(res =>{
          this.registroForm.reset();
          this.modalService.open(this.standardModal);
          this.isLoading = false;
        })
        .catch(err => console.error(err));
    }
  }

}
