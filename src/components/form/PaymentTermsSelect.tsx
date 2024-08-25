"use client"
import React from "react";
import CustomSelect from "../common/CustomSelect"; // Import the reusable component
import { paymentTerms } from "@/utils/constant";

const PaymentTermsSelect = () => {

  return (
    <CustomSelect
      name="billTo.paymentTerms"
      label="Payment Terms"
      options={paymentTerms}
      placeholder="Select Terms"
    />
  );
};

export default PaymentTermsSelect;
