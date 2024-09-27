import { createRouter, createWebHistory } from 'vue-router'
import JobsView from '../views/JobsView.vue'
import { useJob } from '@/stores/jobs'
import { useAuth } from "@/stores/auth";
import type { JobId } from "@/models/Job";
import { useMyApplications } from "@/stores/myApplications";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/jobs',
    },
    {
      path: '/jobs',
      name: 'jobs-overview',
      component: () => import('../views/JobsView.vue'),
      beforeEnter: () => useJob().fetchJobs(),
    },

    {
      path: '/job/:jobId',
      name: 'job-overview',
      component: () => import('../views/JobView.vue'),
      beforeEnter: (to) => useJob().fetchJob(Number(to.params.jobId) as JobId),
    },

    {
      path: '/my-applications',
      name: 'my-applications',
      component: () => import('../views/MyApplicationsView.vue'),
      beforeEnter: (to) => useMyApplications().fetchMyApplications(),
    }
  ]
})

//TODO in aparte file steken
router.beforeEach((to, from, next) => {
  useAuth().init().then(() => next()).catch((error) => next(error));
})

export default router
