import React from "react";
import { FieldHookConfig, useField } from "formik";

import "./style.scss";

interface otherProps {
  label: string;
  readOnly?: boolean;
  onAction?: Function;
  onActionBlur?: Function;
  highlightText?: string;
}

const Textinput = (p: otherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(p);

  const handleOnAction = () => {
    if (p?.onAction) {
      let value = field.value;
      if (p.highlightText) {
        value = p.highlightText;
      }
      p.onAction(value);
    }
  };

  const handleOnBlur = () => {
    if (p?.onActionBlur) {
      p.onActionBlur({ value: field.value, name: field.name });
    }
  };

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
          onClick={handleOnAction}
          onBlur={handleOnBlur}
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
