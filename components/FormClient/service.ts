import axios from "axios";
import getConfig from "next/config";
import { AttributeResponse, OpenGraphModel } from "./type";
import { successOpGHidrate } from "./hidrate";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();

export const OpenGraph = async (
  url: string,
  token: string
): Promise<OpenGraphModel> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/get_open_graph`,
    {
      url: url,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successOpGHidrate(response);
};
