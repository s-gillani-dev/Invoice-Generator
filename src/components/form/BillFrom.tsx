"use client"
import React from "react";
import Input from "../common/Input"; // Adjust the import path as necessary
import CountrySelect from "../common/CountrySelect";

const BillFrom = () => {
  return (
    <div className="w-[628px] min-h-[296px] space-y-4">
      <h2 className="text-lg text-dark">Bill From</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="billFrom.companyName"
          label="Company Name"
          placeholder="Enter company name"
        />
        <Input
          name="billFrom.companyEmail"
          type="email"
          label="Company Email"
          placeholder="Enter company email"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <CountrySelect name="billFrom.country" />
        <Input name="billFrom.city" label="City" placeholder="Enter city" />
        <Input
          name="billFrom.postalCode"
          label="Postal Code"
          placeholder="Enter postal code"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Input
          name="billFrom.streetAddress"
          label="Street Address"
          placeholder="Enter street address"
        />
      </div>
    </div>
  );
};

export default BillFrom;
