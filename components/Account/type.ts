/**
 * Register
 */

export const SUBMIT_FORM_REGISTER = "SUBMIT_FORM_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";
export const FAIL_REGISTER = "FAIL_REGISTER";

export interface RegisterUser {
  fullName: string;
  nickname: string;
  email: string;
  privileges: number;
  section: Array<string>;
  password: string;
}

interface EventSubmitForm {
  type: typeof SUBMIT_FORM_REGISTER;
}

interface EventSuccessRegister {
  type: typeof SUCCESS_REGISTER;
}

interface EventFailRegister {
  type: typeof FAIL_REGISTER;
}

/**
 * Recover Password
 */

export const SUBMIT_FORM_RECOVER = "SUBMIT_FORM_RECOVER";
export const SUCCESS_RECOVER = "SUCCESS_RECOVER";
export const FAIL_RECOVER = "FAIL_RECOVER";

interface EventSubmitRecover {
  type: typeof SUBMIT_FORM_RECOVER;
}

interface EventSuccessRecover {
  type: typeof SUCCESS_RECOVER;
}

interface EventFailRecover {
  type: typeof FAIL_RECOVER;
}

/**
 * Update Password
 */

export const SUBMIT_FORM_UPDATE = "SUBMIT_FORM_UPDATE";
export const SUCCESS_UPDATE = "SUCCESS_UPDATE";
export const FAIL_UPDATE = "FAIL_UPDATE";

interface EventSubmitUpdate {
  type: typeof SUBMIT_FORM_UPDATE;
}

interface EventSuccessUpdate {
  type: typeof SUCCESS_UPDATE;
}

interface EventFailUpdate {
  type: typeof FAIL_UPDATE;
}

/**
 * Validate Account
 */
export const SUBMIT_FORM_VALIDATE = "SUBMIT_FORM_VALIDATE";
export const SUCCESS_VALIDATE = "SUCCESS_VALIDATE";
export const FAIL_VALIDATE = "FAIL_VALIDATE";

interface EventSubmitValidate {
  type: typeof SUBMIT_FORM_VALIDATE;
}

interface EventSuccessValidate {
  type: typeof SUCCESS_VALIDATE;
}

interface EventFailValidate {
  type: typeof FAIL_VALIDATE;
}

/**
 * General Status
 */

export interface StatusAccount {
  loading: boolean;
  done: boolean;
  fail: boolean;
}

export type ActionAccount =
  | EventSubmitForm
  | EventSuccessRegister
  | EventFailRegister
  | EventSubmitRecover
  | EventSuccessRecover
  | EventFailRecover
  | EventSubmitUpdate
  | EventSuccessUpdate
  | EventFailUpdate
  | EventSubmitValidate
  | EventSuccessValidate
  | EventFailValidate;

export interface RxStatusAccount {
  AccountReducer: StatusAccount;
}
