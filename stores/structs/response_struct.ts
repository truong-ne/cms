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
  any,
} from "superstruct";

export const DataObjectSchema = object({
  code: any(),
  message: any(),
  data: object(),
});

export const DataObjectLoginSchema = object({
  data: object(),
});

export const DataArraySchema = object({
  code: any(),
  message: any(),
  data: array(),
});


export const DataStringSchema = object({
  code: number(),
  message: string(),
  data: string(),
});

export const DataNumberSchema = object({
  code: any(),
  message: any(),
  data: number(),
});

export type DataObject = Infer<typeof DataObjectSchema>;
export type DataArray = Infer<typeof DataArraySchema>;
export type DataString = Infer<typeof DataStringSchema>;
export type DataNumber = Infer<typeof DataNumberSchema>;
export type DataObjectLogin = Infer<typeof DataObjectLoginSchema>;
