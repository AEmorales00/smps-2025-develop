import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { rolesList, RolUsuarioInterface, tallasList, Tallas } from './datos-seleccionable';
import { RegistroAsistentesService } from './registro.service';
import { datosUsuarioAsistenteDTO, FormModel } from '@/app/models/registroAsistenteSimposio.model';

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

  constructor(
    private fb: FormBuilder,
    private registroAsistentesService: RegistroAsistentesService,
    private router: Router
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
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      this.registroForm.patchValue({ comprobante: file });
      this.registroForm.get('comprobante')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const formModel: FormModel = this.registroForm.value;
      const dto = new datosUsuarioAsistenteDTO(formModel);
      const formData = dto.toFormData();

      this.registroAsistentesService.postUsuarioAsistente(formData)
        .then(() => {
          alert('✅ ¡Registro exitoso!');
          this.registroForm.reset();
          this.router.navigate(['/index']); // 🔄 redirige al dashboard
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
