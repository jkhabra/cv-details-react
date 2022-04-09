/* eslint-disable */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

import SignInForm from "../../../components/signinForm";
import { ROUTE_CONSTANTS, STRINGS } from "../../../utils";
import "./style.scss";

const lognInSubText = "Please sign in to your account and start the Legalism";

const Singin: React.FC = () => {
  const [showOtpScreen, setShowOtpScreen] = useState<boolean>(false);
  const [, setUser] = useState<{ email: string }>({ email: "" });

  const onLoginSuccess = (user: { email: string; persona: string; isTaskAssigned?: boolean }) => {
    setShowOtpScreen(false);
    setUser(user);

    return;
  };

  return (
    <div className="login-auth-wrapper">

<Helmet>
                <title>My Title</title>
            </Helmet>

      <div className="auth-container">
        <div className="authentication_page">
          <div className="auth-bg-wrapper">
            <div className={`auth-bg-section ${showOtpScreen ? "otp-bg" : "login-bg"}`} />
          </div>

          <div className="auth-form-section">
            {showOtpScreen ? null : (
              <>
                <h3 className="auth-title">{STRINGS.LOGIN_PAGE_TITLE}</h3>
                <p className="pg-content">
                  <span className="pg-content-text" title={lognInSubText}>
                    {lognInSubText}
                  </span>
                </p>
                <div className="auth-form">
                  <SignInForm onLoginSuccess={onLoginSuccess} />
                </div>

                <div className="login-form-footer">
                  <div className="auth-signup-link">
                    <span>New on our platform?</span>
                    <Link to={ROUTE_CONSTANTS.SIGN_UP}>{"Create an account"}</Link>
                  </div>
                </div>
                <div className="login-form-footer text-center">
                  <div className="forgot-pwd-link">
                    <Link to={ROUTE_CONSTANTS.FORGOT_PASSWORD}>{STRINGS.FORGOT_PASSWORD}</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
