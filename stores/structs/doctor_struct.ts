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
      medical_id: string(),
      phone: string(),
      email: any(),
    })
  ),
  quantity: number(),
});



export type Doctor = Infer<typeof DoctorSchema>;
export type PatientConsultation = Infer<typeof PatientConsultationSchema>;
// export type PatientRecord = Infer<typeof PatientRecordSchema>;
// export type DoctorInfo = Infer<typeof DoctorInfoSchema>;
