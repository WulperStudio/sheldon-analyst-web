import axios from "axios";
import getConfig from "next/config";
import { AttributeResponse, FormLogIn, SuccessSession } from "./type";
import { successLoginHidrate } from "./hidrate";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();

export const LoginService = async (
  form: FormLogIn
): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/login_user`,
    {
      email: form.loginEmail,
      password: form.loginPassword,
    }
  );
  return successLoginHidrate(response);
};

export const AuthSession = async (token: string): Promise<SuccessSession> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/auth`,
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
    `${API_ANALYST}/logout_user`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
