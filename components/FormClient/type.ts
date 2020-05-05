/**
 * Open Graph
 */

export const SUBMIT_OPEN_GRAPH = "SUBMIT_OPEN_GRAPH";
export const SUCCESS_OPEN_GRAPH = "SUCCESS_OPEN_GRAPH";
export const FAIL_OPEN_GRAPH = "FAIL_OPEN_GRAPH";

export interface OpenGraphModel {
  image: string | undefined;
  title: string | undefined;
  desc: string | undefined;
  url: string;
  isLoading: boolean;
  nodata: boolean;
}

export interface ServiceOpenGraph {
  og_title: string;
  og_desc: string;
  og_url: string;
  og_image: string;
}

interface EventSubmitOpG {
  type: typeof SUBMIT_OPEN_GRAPH;
}

interface EventSuccessOpG {
  type: typeof SUCCESS_OPEN_GRAPH;
  payload: OpenGraphModel;
}

interface EventFailOpG {
  type: typeof FAIL_OPEN_GRAPH;
}

/**
 * Code Country Numbers
 */

export const LOAD_CODE_NUMBERS = "LOAD_CODE_NUMBERS";

export interface CodeNumberModel {
  Iso2: string;
  Name: string;
  Iso3: string;
  Unicode: string;
  Dial: string;
  Currency: string;
  Capital: string;
  Continent: string;
}

interface EventLoadCodeNum {
  type: typeof LOAD_CODE_NUMBERS;
  payload: Array<CodeNumberModel>;
}

/**
 * Country & City
 */

export const SUBMIT_FIND_COUNTRY = "SUBMIT_FIND_COUNTRY";
export const LOAD_FIND_COUNTRY = "LOAD_FIND_COUNTRY";

export interface CountryModel {
  country: string;
  sortCities: string;
}

export interface CountryState {
  list: Array<CountryModel>;
  find: string;
  selected?: {
    country: string;
    city: string;
  };
  isLoading: boolean;
}

interface EventSubmitCountry {
  type: typeof SUBMIT_FIND_COUNTRY;
}

interface EventSuccessCountry {
  type: typeof LOAD_FIND_COUNTRY;
  payload: Array<CountryModel>;
}

/**
 * Form Save Data
 */

export const SUBMIT_FORM = "SUBMIT_FORM";
export const SUCCESS_FORM = "SUCCESS_FORM";
export const FAIL_FORM = "FAIL_FORM";

export interface DecisionMakerDataSubmit {
  decisionmaker?: string;
  lastname?: string;
  cellphone_whatsapp: string;
  personal_companymail: string;
  personal_mail?: string;
  facebook_url?: string;
  linkedin_url?: string;
}

export interface RequestSaveDataSubmit extends DecisionMakerDataSubmit {
  company_name?: string;
  potential_size?: string;
  web_url?: string;
  company_linkedin_url?: string;
  competitors?: Array<string>;
  country?: string;
  city?: string;
  interests?: Array<string>;
  company_sector?: Array<string>;
  company_area?: Array<string>;
  company_position?: Array<string>;
  company_products?: Array<string>;
  nse?: string;
  extra_decision_market: Array<DecisionMakerDataSubmit | undefined>;
}

export interface DecisionMaker {
  name?: string;
  cellPhone: string;
  companyEmail: string;
  personaEmail?: string;
  facebook?: string;
  personalLinkedin?: string;
}

export interface FormClientModel {
  companyName?: string;
  companySize?: string;
  companySite?: string;
  linkedin?: string;
  competitors?: Array<string>;
  principalDecisionMaker: DecisionMaker;
  decisionMaker: Array<DecisionMaker>;
  country?: string;
  city?: string;
  interests?: Array<string>;
  sector?: Array<string>;
  area?: Array<string>;
  position?: Array<string>;
  services?: Array<string>;
  nse?: string;
  isLoading?: boolean;
  done?: boolean;
  fail?: boolean;
}

interface EventSubmitForm {
  type: typeof SUBMIT_FORM;
  payload: FormClientModel;
}

interface EventSuccessForm {
  type: typeof SUCCESS_FORM;
}

interface EventFailForm {
  type: typeof FAIL_FORM;
}
/**
 * General Contact Info
 */

export const SUBMIT_GENERAL_INFO = "SUBMIT_GENERAL_INFO";
export const LOAD_GENERAL_INFO = "LOAD_GENERAL_INFO";

export interface GeneralCInfoModel {
  potentialSize: Array<string>;
  interests: Array<string>;
  companySector: Array<string>;
  companyArea: Array<string>;
  companyPosition: Array<string>;
  companyProducts: Array<string>;
  nse: Array<string>;
}

export interface GeneralCInfoState extends GeneralCInfoModel {
  isLoading: boolean;
}

interface EventSubmitGeneralContactInfo {
  type: typeof SUBMIT_GENERAL_INFO;
}

interface EventSuccessGeneralContactInfo {
  type: typeof LOAD_GENERAL_INFO;
  payload: GeneralCInfoModel;
}

/**
 * General Status
 */

export type ActionFormClient =
  | EventSubmitOpG
  | EventSuccessOpG
  | EventFailOpG
  | EventLoadCodeNum
  | EventSubmitCountry
  | EventSuccessCountry
  | EventSubmitGeneralContactInfo
  | EventSuccessGeneralContactInfo
  | EventSubmitForm
  | EventSuccessForm
  | EventFailForm;

export interface StatusFormClient {
  opg: OpenGraphModel;
  codeNum: Array<CodeNumberModel>;
  country: CountryState;
  genCInfo: GeneralCInfoState;
  form: FormClientModel;
}

export type AttributeResponse = {
  data:
    | ServiceOpenGraph
    | Array<CodeNumberModel>
    | Array<CountryModel>
    | GeneralCInfoModel;
};

export interface RxStatusFormClient {
  FormClientReducer: StatusFormClient;
}
