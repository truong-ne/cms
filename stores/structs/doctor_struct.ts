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
  phone:any(),
  specialty: any(),
  fee_per_minutes: any(),
  experience:any(),
  ratings: any(),
  number_of_consultation: any(),
  fixed_times:any(),
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
