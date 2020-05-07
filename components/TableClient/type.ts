/**
 * CLIENT DATA
 */

export const LOADING_CLIENTS_DATA = "LOADING_CLIENTS_DATA";
export const SUCCESS_CLIENTS_DATA = "SUCCESS_CLIENTS_DATA";
export const FAIL_CLIENTS_DATA = "FAIL_CLIENTS_DATA";

export interface Filters {
  names?: Array<string>;
  funnel_status?: Array<string>;
  company_sector?: Array<string>;
  potential_size?: Array<string>;
  country?: Array<string>;
}

export interface ClientDataService {
  company_name: string;
  web_url: string;
  decisionmaker: string;
  lastname: string;
  company_area: string;
  company_position: string;
  interests: Array<string>;
  country: string;
  company_linkedin_url: string;
  potential_size: string;
  company_sector: string;
  company_products: Array<string>;
}

export interface ClientDataModelService {
  contacts: Array<ClientDataService>;
  total: number;
  pages: number;
}

export interface ClientsData {
  companyName: string;
  companySite: string;
  name: string;
  lastName: string;
  area: string;
  position: string;
  interests: Array<string>;
  country: string;
  companyLinkedin: string;
  companySize: string;
  companySector: string;
  companyProducts: Array<string>;
}

export interface ClientDataModel {
  clients: Array<ClientsData>;
  total: number;
  pages: number;
}

interface StateClientData {
  filters: Filters;
  data: ClientDataModel;
  isLoading: boolean;
  done: boolean;
  fail: boolean;
}

interface EventLoadingClientData {
  type: typeof LOADING_CLIENTS_DATA;
  payload: Filters;
}

interface EventSuccessClientData {
  type: typeof SUCCESS_CLIENTS_DATA;
  payload: ClientDataModel;
}

interface EventFailClientData {
  type: typeof FAIL_CLIENTS_DATA;
}

/**
 * General Status
 */

export interface StatusDataClient {
  clientData: StateClientData;
}

export type ActionDataClient =
  | EventLoadingClientData
  | EventSuccessClientData
  | EventFailClientData;

export type AttributeResponse = {
  data: ClientDataModelService;
};

export interface RxStatusDataClient {
  ClientDataReducer: StatusDataClient;
}
