import axios from 'axios'
import {type Token } from '@/models/Common'
import type User from '@/models/User'

export default class AuthClient {
  static async authenticate(email: string, password: string): Promise<Token>  {
    const response = await axios.post('login', {email, password});
    return response.data.token;
  }

  static async getCurrentUser(): Promise<User>  {
    const response = await axios.get('user');
    return response.data;
  }

  static async logout(): Promise<Token>  {
    const response = await axios.post('logout');
    return response.data;
  }
}