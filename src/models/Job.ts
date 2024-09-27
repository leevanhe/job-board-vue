import JobCategory from '@/constants/JobCategory';
import JobExperience from '@/constants/JobExperience';
import type Employer from '@/models/Employer';
import type Application from "@/models/Application";

export type JobId = number;

export default interface Job {
  id: JobId;
  title: string;
  description: string;
  salary: number;
  location: string;
  category: JobCategory;
  experience: JobExperience;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  application_count?: number;
  applications_avg_expected_salary?: string;
  applications?: Array<Application>;
  employer: Employer;
}