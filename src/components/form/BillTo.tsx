"use client"
import React from "react";
import Input from "../common/Input"; // Adjust the import path as necessary
import PaymentTermsSelect from "./PaymentTermsSelect";
import CountrySelect from "../common/CountrySelect";

const BillTo = () => {
  return (
    <div className="w-[628px] space-y-8">
      <div className="w-full min-h-[296x] space-y-4">
        <h2 className="text-lg text-dark">Bill To</h2>

        {/* First row: 2 fields */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="billTo.clientName"
            label="Client’s Name"
            placeholder="Enter client’s name"
          />
          <Input
            name="billTo.clientEmail"
            type="email"
            label="Client’s Email"
            placeholder="Enter client’s email"
          />
        </div>

        {/* Second row: 3 fields */}
        <div className="grid grid-cols-3 gap-4">
          <CountrySelect name="billTo.country" />
          <Input name="billTo.city" label="City" placeholder="Enter city" />
          <Input
            name="billTo.postalCode"
            label="Postal Code"
            placeholder="Enter postal code"
          />
        </div>

        {/* Third row: Street Address */}
        <div className="grid grid-cols-1 gap-4">
          <Input
            name="billTo.streetAddress"
            label="Street Address"
            placeholder="Enter street address"
          />
        </div>
      </div>
      <div className="w-full min-h-[156px] space-y-4">
        {/* Fourth row: Invoice Date, Payment Terms */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="billTo.invoiceDate"
            type="date"
            label="Invoice Date"
            placeholder="Select invoice date"
          />
          <div className="h-[70px] flex flex-col gap-[6px]">
            <PaymentTermsSelect />
          </div>
        </div>

        {/* Fifth row: Project Description */}
        <div className="grid grid-cols-1 gap-4">
          <Input
            name="billTo.projectDescription"
            label="Project Description"
            placeholder="Enter project description"
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
