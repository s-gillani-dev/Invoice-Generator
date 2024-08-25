"use client"
import React from "react";
import Select from "react-select";
import { Field, ErrorMessage, FieldProps } from "formik";
import { CustomSelectProps } from "@/types/selectProps";
import { customStyles } from "@/utils/constant";


const CustomSelect= ({ name, label, options, placeholder }: CustomSelectProps) => {

  return (
    <div className="min-h-[70px] flex flex-col gap-[6px]">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field, form }: FieldProps<string>) => (
          <Select
            {...field}
            id={name}
            options={options}
            value={options.find((option) => option.value === field.value) || null}
            onChange={(option) => form.setFieldValue(name, option?.value)}
            onBlur={() => form.setFieldTouched(name, true)}
            placeholder={placeholder}
            styles={customStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        )}
      </Field>
      <ErrorMessage name={name} component="div" className="text-red-600 mt-1 text-sm" />
    </div>
  );
};

export default CustomSelect;
