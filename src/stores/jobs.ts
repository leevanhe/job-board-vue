import { defineStore } from "pinia";
import JobClient from "@/client/JobClient";
import type { JobsContainer } from "@/client/JobClient";
import type Job from "@/models/Job";
import type { JobId } from "@/models/Job";
import { present } from "@/utils/typescript";

interface State extends JobsContainer {
  current: Job | null;
}

export const useJob = defineStore("job", {
  state: (): State => ({
    jobs: [],
    meta: null,
    current: null
  }),

  getters: {
    getCurrent(state) {
      return present(state.current);
    }
  },

  actions: {
    async fetchJobs() {
      const nextPage = this.meta ? this.meta.current_page + 1 : 1;
      if (!this.meta || nextPage <= this.meta.last_page) {
        const container = await JobClient.loadAllJobs(nextPage);
        this.jobs.push(...container.jobs);
        this.meta = container.meta;
      }
    },

    async fetchJob(id: JobId) {
      this.current = await JobClient.loadJob(id);
    },

    async apply(salary: number, cv: File) {
      const application = await JobClient.apply(present(this.current?.id), salary, cv);
      present(this.current?.applications).unshift(application);
    }
  }
});