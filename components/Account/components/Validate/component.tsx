import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useRouter } from "next/router";
import { Result, Button } from "antd";

import { RxStatusAccount, StatusAccount } from "../../type";
import { submitFormValidate } from "../../action";

const mapState = (state: RxStatusAccount): StatusAccount => {
  return {
    loading: state.AccountReducer.loading,
    done: state.AccountReducer.done,
    fail: state.AccountReducer.fail,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    validate: (token: string) => {
      dispatch(submitFormValidate(token));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Register: React.FunctionComponent<Props> = (props: Props) => {
  const router = useRouter();
  const token = router.query.token as string;
  return (
    <div className="content-form-login">
      <h1>Validation Account Sheldon Contacts</h1>
      {!props.fail && !props.done ? (
        <>
          <br />
          <Button type="primary" onClick={() => props.validate(token)}>
            Validate Account
          </Button>
          <br />
        </>
      ) : null}
      {props.fail ? (
        <Result
          status="error"
          title="Account isn't Valid"
          subTitle="Please check your Email"
        />
      ) : null}
      {props.done ? (
        <Result
          status="success"
          title="Successfully Validation Account!"
          subTitle="Check your email and validate the account"
        />
      ) : null}
    </div>
  );
};

export default connector(Register);
