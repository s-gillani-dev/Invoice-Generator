"use client";
import React from "react";
import { Item } from "@/types/items";
import { BillFrom } from "@/types/billFrom";
import { BillTo } from "@/types/billTo";
import BillingInformation from "./BillingInformation";
import ItemsList from "./ItemsList";
import Totals from "./Totals";

interface InvoicePreviewProps {
  values: {
    billFrom: BillFrom;
    billTo: BillTo;
    itemsList: Item[];
  };
}

interface InvoiceBillTo {
  billTo: BillTo;
}
interface Description{ projectDescription: string }

// Sub-component for the invoice header
const InvoiceHeader = () => (
  <div className="w-[628px] h-[38px] flex gap-4">
    <h2 className="text-lg text-dark">Preview</h2>
  </div>
);
// Sub-component for the invoice details
const InvoiceDateTerms = ({ billTo }: InvoiceBillTo) => (
  <div className="min-h-[76px] grid grid-cols-2 gap-4">
    <div className="flex flex-col gap-2">
      <h4 className="text-md-normal text-gray-300">Invoice Date</h4>
      <p className="text-md-medium text-dark">{billTo.invoiceDate}</p>
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-md-normal text-gray-300">Payment Terms</h4>
      <p className="text-md-medium text-dark">{billTo.paymentTerms}</p>
    </div>
  </div>
);

// Sub-component for project description
const ProjectDescription = ({ projectDescription }: Description) => (
  <div className="w-[290px] min-h-[76px] flex flex-col gap-2">
    <h4 className="text-md-normal text-gray-300">Project Description</h4>
    <p className="text-md-medium text-dark">{projectDescription}</p>
  </div>
);

// Main InvoicePreview component
const InvoicePreview= ({ values }: InvoicePreviewProps) => {
  const { billFrom, billTo, itemsList } = values;

  // Calculate subtotal
  const subtotal = itemsList.reduce((acc, item) => acc + item.total, 0);

  // Calculate tax (10% of subtotal)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  return (
    <div className="w-[676px] min-h-full rounded-3xl space-y-4 bg-gray-100 p-6">
      <InvoiceHeader />
      <div className="w-[628px] min-h-[534px] flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-lg">
        <div className="w-[580px] h-[47px] flex gap-2">
          <h2 className="text-lg text-dark">New Invoice</h2>
        </div>
        <InvoiceDateTerms billTo={billTo} />
        <BillingInformation billFrom={billFrom} billTo={billTo} />
        <ProjectDescription projectDescription={billTo.projectDescription} />
        <ItemsList itemsList={itemsList} />
        <div className="h-[1px] bg-gray-50"></div>
        <Totals subtotal={subtotal} total={total} />
      </div>
    </div>
  );
};

export default InvoicePreview;
