import React from "react";
import { FieldHookConfig, useField } from "formik";

import "./style.scss";

interface otherProps {
  label: string;
  readOnly?: boolean;
  onAction?: Function;
}

const Textinput = (p: otherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(p);

  return (
    <div className="form-group">
      <>
        <label>{p.label}</label>
        <input
          {...field}
          className={p.className}
          placeholder={p.placeholder}
          type={p.type}
          readOnly={p.readOnly || false}
        />
      </>
      {meta.touched && meta.error ? (
        <div className="field-error" title={meta?.error}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default Textinput;
