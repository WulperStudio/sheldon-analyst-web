import { validURL } from "./valid_url_regex";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type Validator = (_: any, value: any) => Promise<any>;

export const defaultValidator = (_: any): Promise<any> => {
  return Promise.resolve();
};

export const validateFieldUrl = (_: any, value: string) => {
  return validURL(value) || !value
    ? Promise.resolve()
    : Promise.reject("Url is not valid.");
};
