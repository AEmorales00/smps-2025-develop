export interface FormModel{
    nombres: string
    apellidos: string
    email: string
    participant_type: string
    birth_date: string
    comprobante: File
    talla: string
    telefono:string
    carnet:number
    metodo_pago?: string
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
  payment_method?: string = '';

  constructor(formModel: FormModel) {
    this.name = `${formModel.nombres} ${formModel.apellidos}`;
    this.email = formModel.email;
    this.phone = formModel.telefono;
    this.birth_date = formModel.birth_date;
    this.shirt_size = formModel.talla;

    // Validar participant_type
    const validParticipantTypes = ['estudiante_umg', 'catedratico_umg', 'externo'];
    if (!validParticipantTypes.includes(formModel.participant_type)) {
      throw new Error('Tipo de participante inválido');
    }

    this.participant_type = formModel.participant_type;
    this.carnet = formModel.carnet;
    this.comprobante = formModel.comprobante;
    this.payment_method = formModel.metodo_pago;
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
    formData.append('payment_method', this.payment_method || '');

    if (this.comprobante) {
      formData.append('comprobante', this.comprobante, this.comprobante.name);
    }

    return formData;
  }
}

