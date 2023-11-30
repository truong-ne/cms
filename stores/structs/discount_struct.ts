import { any, date, number, object, string, type Infer } from "superstruct";

export const DiscountSchema = object({
  id: string(),
  code:string(),
  value: number(),
  type: string(),
  expiration_time: string(),
});

export type Discount = Infer<typeof DiscountSchema>;
