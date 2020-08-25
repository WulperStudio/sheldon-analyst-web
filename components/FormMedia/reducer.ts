import {
  SUBMIT_FORM_MEDIA,
  SUCCESS_FORM_MEDIA,
  FAIL_FORM_MEDIA,
  StatusFormMedia,
  ActionFormMedia,
} from "./type";

export const initialState = (): StatusFormMedia => ({
  media: {
    mediaName: undefined,
  },
  statusRequest: 0,
});

export const FormMediaReducer = (
  state: StatusFormMedia = initialState(),
  action: ActionFormMedia
): StatusFormMedia => {
  switch (action.type) {
    case SUBMIT_FORM_MEDIA:
      return { ...state };
    case SUCCESS_FORM_MEDIA:
      return { ...state, statusRequest: 1 };
    case FAIL_FORM_MEDIA:
      return { ...state, statusRequest: -1 };
    default:
      return state;
  }
};
