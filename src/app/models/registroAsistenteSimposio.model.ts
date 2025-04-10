export interface FormModel{
    nombres: string
    apellidos: string
    email: string
    rolId: string
    birth_date: string
    comprobante: File
    talla: string
    telefono:string
    carnet:number
}

export class datosUsuarioAsistenteDTO {
  name: string = '';
  email: string = '';
  phone: string = '';
  birth_date: string = '';
  shirt_size: string = '';
  participant_type: string = '';
  carnet: number = 0;
  comprobante: File | null = null;

  constructor(formModel: FormModel) {
    this.name = `${formModel.nombres} ${formModel.apellidos}`;
    this.email = formModel.email;
    this.phone = formModel.telefono;
    this.birth_date = formModel.birth_date;
    this.shirt_size = formModel.talla;
    this.participant_type = formModel.rolId;
    this.carnet = formModel.carnet;
    this.comprobante = formModel.comprobante;
  }

  toFormData(): FormData {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('birth_date', this.birth_date);
    formData.append('shirt_size', this.shirt_size);
    formData.append('participant_type', this.participant_type);
    formData.append('carnet', this.carnet.toString());

    if (this.comprobante) {
      formData.append('comprobante', this.comprobante, this.comprobante.name);
    }

    return formData;
  }
}

