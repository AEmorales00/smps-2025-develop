import { Component, ElementRef, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbCarouselModule],
})
export class RegistroUsuariosComponent implements OnInit {
  rolUsuario: RolUsuarioInterface[] = rolesList;
  tallas: Tallas[] = tallasList;
  participant_type_student = rolesList[0].descripcion;
  selectedFile: File | null = null;
  registroForm: FormGroup;

  private modalService = inject(NgbModal)
  @ViewChild('standardModal') standardModal: any;
  @ViewChild('fileInput') fileInput!: ElementRef;

  isLoading = false;
  file:any

  constructor(
    private fb: FormBuilder,
    private registroAsistentesService: RegistroAsistentesService,
    private utilsService:UtilsService,

  ) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      participant_type: ['', Validators.required], // nombre correcto
      birth_date: ['', Validators.required],
      comprobante: [null, Validators.required],
      talla: ['', Validators.required],
      telefono: ['', Validators.required],
      carnet: ['']
    });
  }

  ngOnInit() {}

  onFileSelected(event: any): void {
    console.log(event)
    this.file = (event.target as HTMLInputElement).files?.[0];
    if (this.file) {
      this.selectedFile = this.file;
      this.registroForm.patchValue({ comprobante: this.file });
      this.registroForm.get('comprobante')?.updateValueAndValidity();
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
          this.file = null;
          this.selectedFile = null;
          this.fileInput.nativeElement.value = '';

          this.modalService.open(this.standardModal);
          this.isLoading = false;
        })
        .catch(err => {
          const errorMessage = err.error?.error || 'Error inesperado al registrar.';
          alert(`❌ ${errorMessage}`);
        });
    } else {
      alert('❌ Por favor llena todos los campos correctamente antes de enviar.');
    }
  }
}
