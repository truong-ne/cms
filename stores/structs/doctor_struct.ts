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
  gender: any(),
  dayOfBirth: any(),
  address: any(),
  careers: array(
    object({
      id: any(),
      medicalInstitute: any(),
      position: any(),
      periodStart: any(),
      periodEnd: any(),
    })
  ),
  specialty: array(
    object({
      id: any(),
      specialty: any(),
      levelOfSpecialty: any(),
      image: any(),
    })
  ),
  educationAndCertification: array(
    object({
      id: any(),
      typeOfEducationAndExperience: any(),
      degreeOfEducation: any(),
      institution: any(),
      specialtyByDiploma: any(),
      address: any(),
      diplomaNumberAndSeries: any(),
      dateOfReceiptOfDiploma: any(),
    })
  ),

  fee_per_minutes: any(),
  account_balance: number(),
  ratings: number(),
  number_of_consultation: any(),
  fixed_times: array(array(number())),
  biography: any(),
  updated_at: any(),
  is_active: boolean(),
});

export const CareerSchema = object({
  id: any(),
  medicalInstitute: any(),
  position: any(),
  periodStart: any(),
  periodEnd: any(),
});

export const SpecialtySchema = object({
  id: any(),
  specialty: any(),
  levelOfSpecialty: any(),
  image: any(),
});

export const EducationAndCertificationSchema = object({
  id: any(),
  typeOfEducationAndExperience: any(),
  degreeOfEducation: any(),
  institution: any(),
  specialtyByDiploma: any(),
  address: any(),
  diplomaNumberAndSeries: any(),
  dateOfReceiptOfDiploma: any(),
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
export type Career = Infer<typeof CareerSchema>;
export type Specialty = Infer<typeof SpecialtySchema>;
export type EducationAndCertification = Infer<
  typeof EducationAndCertificationSchema
>;
export type PatientConsultation = Infer<typeof PatientConsultationSchema>;
export type DoctorQuantity = Infer<typeof DoctorQuantitySchema>;
export type ConsultationQuantity = Infer<typeof ConsultationQuantitySchema>;
export type ConsultationPie = Infer<typeof ConsultationPieSchema>;
export type MoneyQuantity = Infer<typeof MoneyQuantitySchema>;
export type MoneyMonth = Infer<typeof MoneyMonthSchema>;
// export type PatientRecord = Infer<typeof PatientRecordSchema>;
// export type DoctorInfo = Infer<typeof DoctorInfoSchema>;
