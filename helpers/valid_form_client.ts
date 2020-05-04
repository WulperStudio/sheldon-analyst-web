import { validURL } from "./valid_url_regex";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type Validator = (_: any, value: any) => Promise<any>;

export const defaultValidator = (_: any): Promise<any> => {
  return Promise.resolve();
};

export const validateFieldUrl = (_: any, value: string): Promise<any> => {
  return validURL(value) || !value
    ? Promise.resolve()
    : Promise.reject("Url is not valid.");
};

export const validatePhoneNumber = (_: any, value: string) => {
  // const fullExpr = /^[+]([0-9]{1,4})[.\- ]([0-9.\- ]{1,20})/;
  const regExpr = /(^([0-9]{1,4})[0-9.\- ]{1,20})/;
  return regExpr.test(value) || !value
    ? Promise.resolve()
    : Promise.reject("Number Phone is not valid.");
};
