import { beforeEach, describe, expect, test, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import axios from "axios";
import { useAuth } from "../auth";

vi.mock('axios');
describe("Auth Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("makes a POST request to login", async () => {
    const loginPayload = {
      email: "test@test.com",
      password: "password"
    };

    const mockPostResponse = {
      data: { token: "56|Yf1mzZU2hppEWxPHQ7kNRhCyFXZipT2cErFqoLpJ0a7bc50a" }
    };

    const mockGetResponse = {
      data: { id: 1,
        name: "Lee Van Hecke",
        email: "test@test.com",
        email_verified_at: "2024-09-24T12:13:08.000000Z",
        created_at: "2024-09-24T12:13:08.000000Z",
        updated_at: "2024-09-24T12:13:08.000000Z"
      }
    };

    axios.post = vi.fn().mockResolvedValue(mockPostResponse);
    axios.get = vi.fn().mockResolvedValue(mockGetResponse);

    useAuth().authenticate("test@test.com", "password")

    expect(axios.post).toHaveBeenCalledWith("http://127.0.0.1:8000/api/login", loginPayload);
  });
});