/* eslint-disable @typescript-eslint/camelcase */
import { FormMediaModel, RequestFormMedia } from "./type";

/**
 * Submit Form Media
 * @param form
 */

export const submitFormMediaHidrate = (
  form: FormMediaModel
): RequestFormMedia => {
  return {
    media_name: form.mediaName,
  };
};
