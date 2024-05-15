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

export type ConsultationChart = Infer<typeof ConsultationChartschema>;
export type AllConsultation = Infer<typeof AllConsultationschema>;
export type Consultation = Infer<typeof Consultationschema>;
export type MoneyChartOfMonth = Infer<typeof MoneyChartOfMonthSchema>;
