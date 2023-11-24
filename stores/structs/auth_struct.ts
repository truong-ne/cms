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
} from "superstruct";

export const AuthenticateSchema = object({
  id: string(),
  jwt_token: string(),
});

export type Authenticate = Infer<typeof AuthenticateSchema>
