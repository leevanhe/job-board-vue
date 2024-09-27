export type EmployerId = number;

export default interface Employer {
  id: EmployerId;
  company_name: string;
  created_at: Date;
  updated_at: Date;
}