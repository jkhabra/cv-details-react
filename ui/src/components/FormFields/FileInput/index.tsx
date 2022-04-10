import React from "react";
import { FieldHookConfig, useField, useFormikContext } from "formik";

import "./style.scss";

interface otherProps {
  label: string;
  readOnly?: boolean;
  onAction?: Function;
  onActionChage?: Function;
  acceptType: string;
}

const FileInput = (p: otherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(p);
  const { setFieldValue } = useFormikContext();

  const handleOnChange = (e: any) => {
    const file = e.target.files[0];
    console.log("---file--value", field, file)
    console.log("---file--value", file.name)


    setFieldValue(field.name, file);
  };

  return (
    <div className="form-group">
      <>
        <label>{p.label}</label>
        <input
          {...field}
          className={p.className}
          placeholder={p.placeholder}
          type={"file"}
          readOnly={p.readOnly || false}
          value={field.value}
          onChange={handleOnChange}
          accept={p.acceptType}
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

export default FileInput;
