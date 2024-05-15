import { any, array, object, type Infer } from "superstruct";

export const QuantityNewPatientSchema = object({
  userByMonth: array(object({ month: any(), totalUserThisMonth: any() })),
});
export const QuantityNewPatientMonthSchema = object({
  month: any(),
  totalUserThisMonth: any(),
});
export const PatientSchema = object({
  phone:any(),
  email: any(),
  password: any(),
  passwordConfirm: any(),
  full_name: any(),
  date_of_birth: any(),
  gender: any(),
  address: any()
});

export type QuantityNewPatient = Infer<typeof QuantityNewPatientSchema>;
export type Patient = Infer<typeof PatientSchema>;
export type QuantityNewPatientMonth = Infer<
  typeof QuantityNewPatientMonthSchema
>;
