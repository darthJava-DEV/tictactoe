import Axios from "axios";
import { apiEndpoint } from "../auth/config";
import { getApiConfig } from "./utils";

export interface User {
  userId: string;
  userName: string;
  avatar?: string;
}

export interface AvatarUpdate {
  postUrl: string;
  avatarUrl: string;
}

class UserResourceImpl {
  async createUser(): Promise<User> {
    const result = await Axios.post(`${apiEndpoint}/user`, "", getApiConfig());
    return result.data;
  }

  async getUser(): Promise<User> {
    const result = await Axios.get(`${apiEndpoint}/user`, getApiConfig());
    return result.data;
  }

  async updateUserAvatar(userName: string): Promise<AvatarUpdate> {
    const result = await Axios.post(`${apiEndpoint}/user/${userName}/avatar`, "", getApiConfig());
    return result.data;
  }

  async uploadImage(url: string, file: Buffer): Promise<void> {
    return await Axios.put(url, file);
  }
}

export const UserResource = new UserResourceImpl();
