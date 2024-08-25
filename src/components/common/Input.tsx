"use client"
import React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { FormikInputProps } from "@/types/inputProps";

const FormikInput = ({
  name,
  type = "text",
  placeholder,
  label,
  className = "",
  disabled = false,
  setTotal,
}: FormikInputProps) => {
  return (
    <div className="min-h-[70px] flex flex-col gap-[6px]">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`w-full h-[44px] py-[10px] px-[14px] rounded-lg border border-gray-700 ${
              form.errors[name] && form.touched[name] ? "border-red" : ""
            } ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            onChangeCapture={(e) => {
              if (setTotal) {
                setTotal(e.target.value); // Call the custom setTotal function if provided
              }
            }}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 mt-1 text-sm"
      />
    </div>
  );
};

export default FormikInput;
