import axios from "axios";
import { RegisterUser } from "./type";

const API = process.env.API_ANALYST;

export const RegisterUserService = async (
  form: RegisterUser
): Promise<void> => {
  await axios.post<{}>(`${API}/register_user`, { ...form });
};

export const RecoverService = async (email: string): Promise<void> => {
  await axios.post<{}>(`${API}/recover_password`, { email: email });
};

export const PasswordService = async (
  token: string,
  password: string
): Promise<void> => {
  await axios.post<{}>(`${API}/update_password`, {
    token: token,
    password: password,
  });
};

export const ValidAccountService = async (token: string): Promise<void> => {
  await axios.get<{}>(`${API}/valid_email/${token}`);
};
