import axios from "axios";
import getConfig from "next/config";
import {
  AttributeResponse,
  OpenGraphModel,
  CodeNumberModel,
  CountryModel,
  GeneralCInfoModel,
  FormClientModel,
} from "./type";
import {
  successOpGHidrate,
  successCodeNumHidrate,
  successGenCInfoHidrate,
  successCountryHidrate,
  submitFormClientHidrate,
} from "./hidrate";

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

export const loadCodeNumService = async (
  token: string
): Promise<Array<CodeNumberModel>> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/get_code_numbers`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successCodeNumHidrate(response);
};

export const loadCountryService = async (
  find: string,
  token: string
): Promise<Array<CountryModel>> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/get_country_cities`,
    {
      find: find,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successCountryHidrate(response);
};

export const loadGenCInfoService = async (
  token: string
): Promise<GeneralCInfoModel> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/get_general_contact_info`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successGenCInfoHidrate(response);
};

export const loadFormClientService = async (
  form: FormClientModel,
  token: string
): Promise<void> => {
  const data = submitFormClientHidrate(form);
  await axios.post<AttributeResponse>(
    `${API_ANALYST}/create_contacts`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
