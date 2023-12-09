import {
  string,
  number,
  array,
  record,
  object,
  size,
  optional,
  defaulted,
  assign,
  type Infer,
  date,
  boolean,
  any,
} from "superstruct";

export const MedicalRecordSchema = object({
  id: string(),
  full_name: string(),
  date_of_birth: string(),
  gender: string(),
  relationship: any(),
  avatar: string(),
  address: string(),
  isMainProfile: boolean(),
  updated_at: string(),
});


export const MedicalRecordInfoSchema = object({
  id: string(),
  phone: string(),
  email: any(),
  account_balance: any(),
  full_name: string(),
  date_of_birth: string(),
  gender: string(),
  relationship: any(),
  avatar: string(),
  address: string(),
  isMainProfile: any(),
  update_at: string(),
});
export const VaccinationRecordSchema = object({
  id: string(),
  dose_number: number(),
  date: string(),
  updated_at: string(),
  vaccine: object({
    id: string(),
    disease: string(),
    max_dose: number(),
    is_child: boolean(),
  }),
});
export const VaccinationSchema = object({
  id: string(),
  disease: string(),
  max_dose: number(),
  is_child: boolean(),
});
export const MedicalQuantitySchema = object({
  quantity: number(),
  increase: number(),
});
export const PatientRecordSchema = object({
  id: string(),
  record:
    string(),
  folder: string(),
  size: string(),
  update_at: string(),
});

export type MedicalRecord = Infer<typeof MedicalRecordSchema>;
export type PatientRecord = Infer<typeof PatientRecordSchema>;
export type MedicalRecordInfo = Infer<typeof MedicalRecordInfoSchema>;
// export type Vaccination = Infer<typeof VaccinationSchema>;
export type VaccinationRecord = Infer<typeof VaccinationRecordSchema>;
export type MedicalQuantity = Infer<typeof MedicalQuantitySchema>;

