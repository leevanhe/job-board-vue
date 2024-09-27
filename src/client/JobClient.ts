import type Job from '@/models/Job'
import type { JobId } from '@/models/Job'
import axios from 'axios'
import type Application from "@/models/Application";
import type Meta from "@/models/Meta";

export interface JobsContainer {
  jobs: Array<Job>;
  meta: Meta | null;
}

export default class JobClient {
  static async loadAllJobs(page: number): Promise<JobsContainer>  {
    const response = await axios.get(`works?page=${page}`);
    return {jobs: response.data.data, meta: response.data.meta};
  }

  static async loadJob(id: JobId): Promise<Job>  {
    const response = await axios.get(`works/${id}`);
    return response.data.data;
  }

  static async apply(id: JobId, salary: number, cv: File): Promise<Application>  {
    const formData = new FormData();
    formData.append('expected_salary', `${salary}`);
    formData.append('cv', cv);

    const response = await axios.post(`work/${id}/application`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  }
}