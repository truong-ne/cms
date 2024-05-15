import { any, array, number, object, partial, type Infer } from "superstruct";

export const ConsultationChartschema = object({
  finish: any(),
  confirm: any(),
  pending: any(),
  cancel: any(),
});
export const Consultationschema = partial(
  object({
    id: any(),
    doctor: DoctorSchema,
    medical: MedicalRecordSchema,
    date: any(),
    expected_time: any(),
    price: number(),
    status: any(),
    jisti_token: any(),
    updated_at: any(),
  })
);
export const AllConsultationschema = object({
  coming: array(Consultationschema),
  finish: array(Consultationschema),
});
export const MoneyChartOfMonthSchema = object({
  moneyChartOfMonth: object(),
  consultation: any(),
});
export const QuantityMedicalOldNewByMonthSchema = object({
  month: any(),
  newMedical: any(),
  oldMedical: any(),
});
export const QuantityMedicalOldNewSchema = object({
  medicalByMonth: array(QuantityMedicalOldNewByMonthSchema),
});
export const FeedbackSchema = object({
  id: any(),
  feedback:any(),
  user: object({
    id: any(),
    full_name: any(),
    date_of_birth: any(),
    gender: any(),
    address: any(),
    avatar: any(),
  }),
  rated: any(),
  created_at: any(),
});

export type ConsultationChart = Infer<typeof ConsultationChartschema>;
export type Feedback = Infer<typeof FeedbackSchema>;
export type AllConsultation = Infer<typeof AllConsultationschema>;
export type Consultation = Infer<typeof Consultationschema>;
export type MoneyChartOfMonth = Infer<typeof MoneyChartOfMonthSchema>;
export type QuantityMedicalOldNew = Infer<typeof QuantityMedicalOldNewSchema>;
export type QuantityMedicalOldNewByMonth = Infer<
  typeof QuantityMedicalOldNewByMonthSchema
>;
