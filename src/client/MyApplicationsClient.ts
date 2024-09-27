import axios from 'axios'
import {type Token } from '@/models/Common'
import type User from '@/models/User'
import type Application from "@/models/Application";

export default class MyApplicationsClient {
  static async loadMyApplications(): Promise<Array<Application>>  {
    const response = await axios.get('my-applications');
    return response.data.data;
  }
}