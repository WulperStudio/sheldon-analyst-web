// import axios from "axios";
import getConfig from "next/config";
import { FormMediaModel } from "./type";
import { submitFormMediaHidrate } from "./hidrate";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();

export const SendFormMediaService = async (
  form: FormMediaModel,
  token: string
): Promise<void> => {
  const data = submitFormMediaHidrate(form);
  console.log("API_ANALYST", API_ANALYST, "token: ", token, "data: ", data);
  // await axios.post<AttributeResponse>(
  //   `${API_ANALYST}/create_contacts`,
  //   {
  //     ...data,
  //   },
  //   {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }
  // );
};
