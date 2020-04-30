import axios from "axios";
import { AttributeResponse, FormLogIn, SuccessSession } from "./type";
import { successLoginHidrate } from "./hidrate";

const API = process.env.API_ANALYST;

export const LoginService = async (
  form: FormLogIn
): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(`${API}/login_user`, {
    email: form.loginEmail,
    password: form.loginPassword,
  });
  return successLoginHidrate(response);
};

export const AuthSession = async (token: string): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(
    `${API}/auth`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successLoginHidrate(response);
};

export const LogOutSession = async (token: string): Promise<void> => {
  await axios.post<{}>(
    `${API}/logout_user`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
