/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { validURL } from "./valid_url_regex";

export type Validator = (_: any, value: any) => Promise<any>;

export type FnValidator = (
  label: string
) => (_: any, value: any) => Promise<any>;

export const defaultValidator = (_: any): Promise<any> => {
  return Promise.resolve();
};

export const validateFieldUrl = (label: string) => (
  _: any,
  value: string
): Promise<any> => {
  return validURL(value) || !value
    ? Promise.resolve()
    : Promise.reject(`${label} is not valid URL format.`);
};

export const validatePhoneNumber = (label: string) => (
  _: any,
  value: string
) => {
  // const fullExpr = /^[+]([0-9]{1,4})[.\- ]([0-9.\- ]{1,20})/;
  const regExpr = /(^([0-9]{1,4})[0-9.\- ]{1,20})/;
  return regExpr.test(value) || !value
    ? Promise.resolve()
    : Promise.reject(`${label} is not valid format.`);
};

export const validateNumberInteger = (label: string) => (
  _: any,
  value: string
) => {
  return /[0-9]$/.test(value) || !value
    ? Promise.resolve()
    : Promise.reject(`${label} is not valid number.`);
};
