import type User from "@/models/User";
import type Job from "@/models/Job";

export type ApplicationId = number;

export default class Application {
  id!: ApplicationId;
  expected_salary: number = 0;
  user!: User;
  cv_path: string = '';
  created_at: string = '';
  updated_at: string = '';
  job?: Job;
}