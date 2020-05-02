import { AxiosResponse } from "axios";
import { AttributeResponse, OpenGraphModel } from "./type";

export const successOpGHidrate = (
  response: AxiosResponse<AttributeResponse>
): OpenGraphModel => {
  const {
    data: { data },
  } = response;
  return {
    title: data.og_title || undefined,
    desc: data.og_desc || undefined,
    image: data.og_image || undefined,
    url: data.og_url,
    isLoading: false,
    nodata: false,
  };
};
