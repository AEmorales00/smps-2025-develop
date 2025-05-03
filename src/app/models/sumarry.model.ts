export interface Summary {
  total_participants: number
  participants_by_type: ParticipantsByType[]
  participants_paid: number
  unverified_payments: number
  participants_checked_in: number
  paid_but_not_checked_in: number
  participants_by_user: ParticipantsByUser[]
  payments_by_method: PaymentsByMethod[]
}

export interface ParticipantsByType {
  participant_type: string
  total: number
}

export interface ParticipantsByUser {
  username: string
  total: number
}

export interface PaymentsByMethod {
  payment_method: string
  total: number
}
