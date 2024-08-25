"use client"
import React from "react";
import { getCode, getNames } from "country-list";
import CustomSelect from "./CustomSelect"; // Import the reusable component
import { CountrySelectProps } from "@/types/selectProps";

const CountrySelect = ({ name }: CountrySelectProps) => {
  const countries = getNames().map((country) => ({
    label: country,
    value: getCode(country) as string,
  }));

  return (
    <CustomSelect
      name={name}
      label="Country"
      options={countries}
      placeholder="Select country"
    />
  );
};

export default CountrySelect;
