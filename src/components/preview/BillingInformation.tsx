"use client"
import React from "react";
import { BillFrom } from "@/types/billFrom";
import { BillTo } from "@/types/billTo";
interface BillingInfo {
  billFrom: BillFrom;
  billTo: BillTo;
}

const BillingInformation = ({ billFrom, billTo }: BillingInfo) => {
  // Helper function to format address
  const formatAddress = (
    city: string = "",
    postalCode: string = ""
  ): string => {
    return city || postalCode ? `${city}, ${postalCode}` : "";
  };

  return (
    <div className="min-h-[38px] grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <h4 className="text-md-normal text-gray-300">Billed From</h4>
        <p className="text-md-medium text-dark">{billFrom.companyName}</p>
        <p className="text-md-medium text-dark">{billFrom.companyEmail}</p>
        <p className="text-md-medium text-dark">{billFrom.streetAddress}</p>
        <p className="text-md-medium text-dark">
          {formatAddress(billFrom.city, billFrom.postalCode)}
        </p>
        <p className="text-md-medium text-dark">{billFrom.country}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-md-normal text-gray-300">Billed To</h4>
        <p className="text-md-medium text-dark">{billTo.clientName}</p>
        <p className="text-md-medium text-dark">{billTo.clientEmail}</p>
        <p className="text-md-medium text-dark">{billTo.streetAddress}</p>
        <p className="text-md-medium text-dark">
          {formatAddress(billTo.city, billTo.postalCode)}
        </p>
        <p className="text-md-medium text-dark">{billTo.country}</p>
      </div>
    </div>
  );
};

export default BillingInformation;
