import axios from "axios";
import getConfig from "next/config";
import { RegisterUser } from "./type";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();


export const RegisterUserService = async (
  form: RegisterUser
): Promise<void> => {
  await axios.post<{}>(`${API_ANALYST}/register_user`, { ...form });
};

export const RecoverService = async (email: string): Promise<void> => {
  await axios.post<{}>(`${API_ANALYST}/recover_password`, { email: email });
};

export const PasswordService = async (
  token: string,
  password: string
): Promise<void> => {
  await axios.post<{}>(`${API_ANALYST}/update_password`, {
    token: token,
    password: password,
  });
};

export const ValidAccountService = async (token: string): Promise<void> => {
  await axios.get<{}>(`${API_ANALYST}/valid_email/${token}`);
};
