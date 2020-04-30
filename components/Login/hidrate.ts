import { AxiosResponse } from "axios";
import { SuccessSession, AttributeResponse } from "./type";

export const successLoginHidrate = (
  response: AxiosResponse<AttributeResponse>
): SuccessSession => {
  const {
    data: { data },
  } = response;
  return {
    id: data.id,
    fullName: data.fullname,
    nickname: data.nickname,
    email: data.email,
    privileges: data.privileges,
    section: data.section,
    token: data.token,
    updated: data.updated,
    created: data.created,
  };
};
