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
  id: string(),
  full_name: string(),
  avatar: any(),
  email: any(),
  specialty: string(),
  fee_per_minutes: number(),
  ratings: number(),
  number_of_consultation: number(),
});

// export const DoctorInfoSchema = object({
//   id: string(),
//   full_name: string(),
//   date_of_birth: string(),
//   gender: string(),
//   relationship: string() || null,
//   avatar: string(),
//   address: string(),
//   records: array(PatientRecordSchema),
// });

export type Doctor = Infer<typeof DoctorSchema>;
// export type PatientRecord = Infer<typeof PatientRecordSchema>;
// export type DoctorInfo = Infer<typeof DoctorInfoSchema>;
