import {
  SUBMIT_FORM_MEDIA,
  SUCCESS_FORM_MEDIA,
  FAIL_FORM_MEDIA,
  FormMediaModel,
  ActionFormMedia,
} from "./type";
import { SendFormMediaService } from "./service";
import { getSession } from "../Login/storage";

export type dispatchRegister = (_: ActionFormMedia) => void;

/**
 * SubmitForm
 * @param form
 */

export const loadFormMedia = (form: FormMediaModel) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitFormMedia(form));
    const token = getSession();
    if (typeof token === "string") {
      SendFormMediaService(form, token)
        .then(() => {
          dispatch(successFormMedia());
        })
        .catch(() => {
          dispatch(failFormMedia());
        });
    }
  };
};

const submitFormMedia = (data: FormMediaModel): ActionFormMedia => ({
  type: SUBMIT_FORM_MEDIA,
  payload: data,
});

const successFormMedia = (): ActionFormMedia => ({
  type: SUCCESS_FORM_MEDIA,
});

const failFormMedia = (): ActionFormMedia => ({
  type: FAIL_FORM_MEDIA,
});
