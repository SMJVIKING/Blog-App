import http from "@/services/httpService";
import { AxiosRequestConfig } from "axios";
import { SigninData, SignupData, User } from "../types/user";

interface ApiResponse<T = any> {
  data: T;
  message?: string;
}

interface UsersResponse {
  users: User[];
}

export async function signupApi(data: SignupData): Promise<User> {
  const response = await http.post<ApiResponse<User>>("/user/signup", data);
  return response.data.data; 
}

export async function signinApi(data: SigninData): Promise<{ user: User; message: string }> {
  const response = await http.post<ApiResponse<{ user: User; message: string }>>("/user/signin", data);
  return response.data.data;
}

export async function getUserApi(): Promise<User> {
  const response = await http.get<ApiResponse<User>>("/user/profile");
  return response.data.data;
}

export async function getAllUsersApi(options?: AxiosRequestConfig): Promise<UsersResponse> {
  const response = await http.get<ApiResponse<UsersResponse>>("/user/list", options);
  return response.data.data;
}

export async function logoutApi(): Promise<{ message: string }> {
  const response = await http.post<ApiResponse<{ message: string }>>("/user/logout");
  return response.data.data;
}
