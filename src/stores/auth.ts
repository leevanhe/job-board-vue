import { defineStore } from "pinia";
import axios from "axios";
import type User from "@/models/User";
import AuthClient from "@/client/AuthClient";
import type { Token } from "@/models/Common";

interface State {
  user: User | null;
}

//Temp solution, i will add laravel passport at soon.

export const useAuth = defineStore("auth", {
  state: (): State => ({
    user: null
  }),

  actions: {
    async init() {
      const token = localStorage.getItem("Authorization");
      if (token) await this.afterLogin(token);
    },

    async authenticate(email: string, password: string): Promise<void> {
      const token = await AuthClient.authenticate(email, password);
      localStorage.setItem("Authorization", `Bearer ${token}`);
      await this.afterLogin(token);
    },

    async _getUser() {
      this.user = await AuthClient.getCurrentUser();
    },

    async afterLogin(token: Token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await this._getUser();
    },

    async logout() {
      await AuthClient.logout();

      localStorage.clear();
      this.user = null;

      delete axios.defaults.headers.common["Authorization"];
    }
  }
});