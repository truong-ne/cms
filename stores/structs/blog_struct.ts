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

export const BlogSchema = object({
  _id: string(),
  photo: any(),
  content:string(),
  title:string(),
  createdAt:string(),
  updatedAt:string()
  // tag:string(),
});

export type Blog = Infer<typeof BlogSchema>;
