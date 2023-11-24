import { string, number, array, record, object, size, optional, defaulted, assign, type Infer, date, boolean } from 'superstruct'

export const MedicalRecordSchema = object({
    id: string(),
    full_name: string(),
    date_of_birth: string(),
    gender: string(),
    relationship: string(),
    avatar: string(),
    address: string(),
    updated_at: string()
})

export const PatientRecordSchema = object({
    id: string(),
    record: string(),
    folder: string(),
    size: string(),
    update_at: string(),
})

export const MedicalRecordInfoSchema = object({
    id: string(),
    full_name: string(),
    date_of_birth: string(),
    gender: string(),
    relationship: string() || null,
    avatar: string(),
    address: string(),
    records: array(PatientRecordSchema)
})

export type MedicalRecord = Infer<typeof MedicalRecordSchema>
export type PatientRecord = Infer<typeof PatientRecordSchema>
export type MedicalRecordInfo = Infer<typeof MedicalRecordInfoSchema>
