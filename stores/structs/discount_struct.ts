import { any, date, number, object, string, type Infer, nullable } from "superstruct";

export const DiscountSchema = object({
  id: any(),
  code:string(),
  value: number(),
  type: string(),
  expiration_time: string(),
});

export type Discount = Infer<typeof DiscountSchema>;
