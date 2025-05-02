export interface scannerCheckIn {
  message: string
  participant: Participant
}

export interface Participant {
  id: number
  name: string
  carnet: any
  email: string
  phone: string
  birth_date: string
  shirt_size: string
  institution: any
  participant_type: string
  registered_by: number
  registered_at: string
  status: string
  checkin_qr: string
  checked_in: boolean
  qr_code_text: string
}
