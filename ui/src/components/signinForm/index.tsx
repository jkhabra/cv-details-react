/* eslint-disable */
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput  from "../FormFields/TextInput";

import "./styles.scss";

import {
  INPUT_FIELD_NAMES,
  STRINGS,
  VALIDATION_MSGS,
} from "../../utils";
//import { useDispatch } from "react-redux";
//import { setUserData, setUserToken } from "../../redux/actions";

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, VALIDATION_MSGS.TOO_SHORT)
    .max(50, VALIDATION_MSGS.TOO_LONG)
    .required(VALIDATION_MSGS.REQUIRED),
  email: Yup.string().email(VALIDATION_MSGS.INVALID_EMAIL).required(VALIDATION_MSGS.REQUIRED),
});

const SigninForm = ({
  onLoginSuccess = (user: { email: string; persona: string; isTaskAssigned?: boolean }) => {},
}) => {
  const [processing, setProcessing] = useState<boolean>(false);
  //const dispatch = useDispatch();
  
  const onFinish = (values: { email: string; password: string }, actions: any) => {
    setProcessing(true);
    return;
  };


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
      // eslint-disable-next-line class-methods-use-this, no-unused-vars
      onSubmit={(values, actions) => {
        onFinish(values, actions);
      }}
    >
      {() => (
        <Form className="singin-form-container">
          <TextInput
            name={INPUT_FIELD_NAMES.EMAIL}
            type="email"
            label="Email"
            placeholder={STRINGS.ENTER_YOUR_EMAIL}
            className={"auth-text-field"}
          />

          <TextInput
            name={INPUT_FIELD_NAMES.PASSWORD}
            type="password"
            label="Password"
            placeholder={STRINGS.ENTER_PASSWORD}
            className={"auth-password-field"}
          />

          <div className="auth-checkbox">
            <input type="checkbox" value="remember-me" id="remember_me" />
            <label>Remember me</label>
          </div>

          <div className="signin-submit">
            <button type="submit" className="form-button" disabled={processing}>
              {STRINGS.LOGIN_TO_ACCOUNT}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
