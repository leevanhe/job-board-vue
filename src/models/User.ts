export type UserId = number;

export default interface User {
  id: UserId;
  name: string;
  email: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
}