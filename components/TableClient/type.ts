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
  linkedin_url: string;
  birthday: string;
  sex: string;
  nse: string;
  verified: boolean;
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
  linkedinUrl: string;
  birthday: string;
  sex: string;
  nse: string;
  verified: boolean;
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
 * Filters
 */

export const SUBMIT_GET_FILTERS = "SUBMIT_GET_FILTERS";
export const SUCCESS_GET_FILTERS = "SUCCESS_GET_FILTERS";
export const FAIL_GET_FILTERS = "FAIL_GET_FILTERS";

export interface GeneralFiltersModel {
  potentialSize: Array<string>;
  interests: Array<string>;
  companySector: Array<string>;
  companyArea: Array<string>;
  companyPosition: Array<string>;
  companyProducts: Array<string>;
  nse: Array<string>;
}

export interface GeneralFiltersState extends GeneralFiltersModel {
  isLoading: boolean;
}

interface EventSubmitFilter {
  type: typeof SUBMIT_GET_FILTERS;
}

interface EventSuccessFilter {
  type: typeof SUCCESS_GET_FILTERS;
  payload: GeneralFiltersModel;
}

interface EventFailFilter {
  type: typeof FAIL_GET_FILTERS;
}

/**
 * General Status
 */

export interface StatusDataClient {
  clientData: StateClientData;
  genealFilters: GeneralFiltersState;
}

export type ActionDataClient =
  | EventLoadingClientData
  | EventSuccessClientData
  | EventFailClientData
  | EventSubmitFilter
  | EventSuccessFilter
  | EventFailFilter;

export type AttributeResponse = {
  data: ClientDataModelService | GeneralFiltersModel;
};

export interface RxStatusDataClient {
  ClientDataReducer: StatusDataClient;
}
