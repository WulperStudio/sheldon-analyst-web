/**
 * Form Media Model
 */

export const SUBMIT_FORM_MEDIA = "SUBMIT_FORM_MEDIA";
export const SUCCESS_FORM_MEDIA = "SUCCESS_FORM_MEDIA";
export const FAIL_FORM_MEDIA = "FAIL_FORM_MEDIA";

export interface FormMediaModel {
  mediaName?: string;
}

interface EventSubmitFormMedia {
  type: typeof SUBMIT_FORM_MEDIA;
  payload: FormMediaModel;
}

interface EventSuccessFormMedia {
  type: typeof SUCCESS_FORM_MEDIA;
}

interface EventFailFormMedia {
  type: typeof FAIL_FORM_MEDIA;
}

export interface RequestFormMedia {
  media_name?: string;
}

/**
 * Global Model
 */

export type ActionFormMedia =
  | EventSubmitFormMedia
  | EventSuccessFormMedia
  | EventFailFormMedia;

export interface StatusFormMedia {
  media: FormMediaModel;
  statusRequest: number;
}

export interface RxStatusFormMedia {
  FormMediaReducer: StatusFormMedia;
}
