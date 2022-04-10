/* eslint-disable */
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, message } from "antd";

import TextInput from "../FormFields/TextInput";
import "./styles.scss";
import { postRequest, STRINGS, VALIDATION_MSGS } from "../../utils";
//import { useDispatch } from "react-redux";
//import { setUserData, setUserToken } from "../../redux/actions";

interface Props {
  step: number;
  nextAction: Function;
  prevAction: Function;
  onAction: Function;
}

const formValidation = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string(),
  email: Yup.string().email(VALIDATION_MSGS.INVALID_EMAIL).required(VALIDATION_MSGS.REQUIRED),
  phone_number: Yup.string(),
  live_in_us: Yup.boolean().required("Required"),
  git_profile: Yup.string().required("Required"),
  Cv: Yup.mixed().required("Required"),
  cover_letter: Yup.mixed(),
  about_you: Yup.string().required("Required"),
});

const CvForm = (p: Props) => {
  const [processing, setProcessing] = useState<boolean>(false);
  //const dispatch = useDispatch();

  const onFinish = async (values: any, actions: any) => {
    try {
      setProcessing(true);
      const res: any = await postRequest("/posts", false, values);
      const { status }: any = res || {};
      // console.log(res, "-----res------", status);

      if (status === 200 || status === 201) {
        message.success("Cv issuccessfully submitted!");
        actions.resetForm();
        p.onAction(0);
      } else {
        message.error("Something went wrong!");
      }
      setProcessing(false);
    } catch (e) {
      setProcessing(false);
      message.error("Something went wrong!");
      console.log("Error ", e);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        live_in_us: false,
        git_profile: "",
        Cv: "",
        cover_letter: null,
        about_you: "",
      }}
      validationSchema={formValidation}
      // eslint-disable-next-line class-methods-use-this, no-unused-vars
      onSubmit={(values, actions) => {
        onFinish(values, actions);
      }}
    >
      {({ values, handleSubmit, setFieldValue, touched, errors }) => (
        <Form className="form-container">
          {p.step === 0 && (
            <>
              <TextInput
                name={"first_name"}
                type="text"
                label="First name *"
                placeholder="First name"
                className={"auth-text-field"}
              />

              <TextInput
                name={"last_name"}
                type="text"
                label="Last name"
                placeholder="Last name"
                className={"auth-text-field"}
              />

              <TextInput
                name={"email"}
                type="email"
                label="Email *"
                placeholder={"email"}
                className={"auth-text-field"}
              />

              <TextInput
                name={"phone_number"}
                type="text"
                label="Phone number"
                placeholder="Phone number"
                className={"auth-text-field"}
              />
              <div className="steps-action">
                <Button type="primary" onClick={() => p.nextAction()}>
                  Next
                </Button>
              </div>
            </>
          )}

          {p.step === 1 && (
            <>
              <TextInput
                name={"git_profile"}
                type="text"
                label="Git profile *"
                placeholder="Git profile"
                className={"auth-text-field"}
              />

              <div className="half-row">
                <div className="file-upload">
                  <label>Upload CV *</label>
                  <input
                    name={"Cv"}
                    type="file"
                    // label="Upload CV *"
                    placeholder="Upload CV"
                    className={"auth-text-field"}
                    accept="application/pdf, application/msword"
                    onChange={(event: any) => {
                      setFieldValue("Cv", event.target.files[0]);
                    }}
                  />

                  {touched && errors.Cv && (
                    <div className="field-error" title={errors.Cv}>
                      {errors.Cv}
                    </div>
                  )}
                </div>

                <div className="file-upload">
                  <label>Upload Cover Letter</label>
                  <input
                    name={"cover_letter"}
                    type="file"
                    className={"auth-text-field"}
                    accept="application/pdf, application/msword"
                    onChange={(event: any) => {
                      setFieldValue("cover_letter", event.target.files[0]);
                    }}
                  />

                  {touched && errors.cover_letter && (
                    <div className="field-error" title={errors.cover_letter}>
                      {errors.cover_letter}
                    </div>
                  )}
                </div>
              </div>

              <TextInput
                name={"about_you"}
                type="text"
                label="About you *"
                placeholder="About you"
                className={"auth-text-field"}
              />

              <div className="auth-checkbox">
                <input
                  name="live_in_us"
                  type="checkbox"
                  value="remember-me"
                  id="remember_me"
                  onClick={() => {
                    setFieldValue("live_in_us", !values.live_in_us);
                  }}
                />
                <label>Do you live in the US? *</label>
              </div>

              <div className="steps-action">
                <Button type="primary" disabled={processing} onClick={() => handleSubmit()}>
                  Submit
                </Button>

                <Button
                  disabled={processing}
                  style={{ margin: "0 8px" }}
                  onClick={() => p.prevAction()}
                >
                  Previous
                </Button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default CvForm;
