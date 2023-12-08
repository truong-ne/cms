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

export const DoctorSchema = object({
  id: any(),
  full_name: any(),
  avatar: any(),
  email: any(),
  phone: any(),
  specialty: any(),
  fee_per_minutes: any(),
  experience: any(),
  ratings: any(),
  number_of_consultation: any(),
  fixed_times: any(),
  biography: any(),
  updated_at: string(),
});

export const PatientConsultationSchema = object({
  consultation: array(
    object({
      medical_id: any(),
      phone: string(),
      email: any(),
    })
  ),
  quantity: number(),
});

export const DoctorQuantitySchema = object({
  quantity: number(),
  doctorThisMonth: number(),
});
export const ConsultationQuantitySchema = object({
  quantity: number(),
  quantityThisMonth: number(),
});
export const ConsultationPieSchema = object({
  cancel: number(),
  confirm: number(),
  finish: number(),
  pending: number(),
});
export const MoneyQuantitySchema = object({
  totalMoney: number(),
  quantityThisMonth: number(),
});
export const MoneyMonthSchema = object({
  month: number(),
  totalMoneyThisMonth: number(),
});

export type Doctor = Infer<typeof DoctorSchema>;
export type PatientConsultation = Infer<typeof PatientConsultationSchema>;
export type DoctorQuantity = Infer<typeof DoctorQuantitySchema>;
export type ConsultationQuantity = Infer<typeof ConsultationQuantitySchema>;
export type ConsultationPie = Infer<typeof ConsultationPieSchema>;
export type MoneyQuantity = Infer<typeof MoneyQuantitySchema>;
export type MoneyMonth = Infer<typeof MoneyMonthSchema>;
// export type PatientRecord = Infer<typeof PatientRecordSchema>;
// export type DoctorInfo = Infer<typeof DoctorInfoSchema>;
