import { defineStore } from "pinia";
import JobClient from "@/client/JobClient";
import type { JobsContainer } from "@/client/JobClient";
import type Job from "@/models/Job";
import type { JobId } from "@/models/Job";
import { present } from "@/utils/typescript";
import type Application from "@/models/Application";
import MyApplicationsClient from "@/client/MyApplicationsClient";

interface State {
  applications: Array<Application>;
}

export const useMyApplications = defineStore("myApplications", {
  state: (): State => ({
    applications: [],
  }),

  actions: {
    async fetchMyApplications() {
      this.applications = await MyApplicationsClient.loadMyApplications();
    },
  }
});