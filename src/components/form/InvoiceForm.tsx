"use client";
import React from "react";
import { Formik, Form } from "formik";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import { initialValues, invoiceSchema } from "@/utils/constant";
import InvoicePreview from "../preview/InvoicePreview";
import InvoiceHeader from "./InvoiceHeader";
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE_MUTATION } from "@/graphql/mutations/createInvoiceMutation";
import { showSuccessToast, showErrorToast } from "@/utils/Toast";

const InvoiceForm = () => {
  const [createInvoice, { loading, error, data }] = useMutation(
    CREATE_INVOICE_MUTATION
  );

  const handleSubmit = async (values: any) => {
    try {
      const response = await createInvoice({
        variables: {
          clientName: values.billTo.clientName,
          clientEmail: values.billTo.clientEmail,
          companyName: values.billFrom.companyName,
          companyEmail: values.billFrom.companyEmail,
          streetAddress: values.billFrom.streetAddress,
          city: values.billFrom.city,
          postalCode: values.billFrom.postalCode,
          country: values.billFrom.country,
          items: values.itemsList.map((item: any) => ({
            itemName: item.itemName,
            qty: item.qty,
            price: item.price,
            total: item.total,
          })),
          invoiceDate: values.billTo.invoiceDate,
          paymentTerms: values.billTo.paymentTerms,
          projectDescription: values.billTo.projectDescription,
        },
      });

      console.log("Invoice created:", response?.data?.createInvoice);
      showSuccessToast("Invoice created successfully!");
    } catch (err) {
      console.error("Error creating invoice:", err);
      showErrorToast("Error creating invoice.");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={invoiceSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, resetForm }) => {
        return (
          <>
            <InvoiceHeader resetForm={resetForm} />
            <div className="w-full mt-[120px] mb-[70px]">
              <div className="w-full max-w-screen-xl min-h-[1076px] flex gap-6 mx-auto">
                <Form
                  className="w-[676px] min-h-full rounded-[24px] flex items-center flex-col gap-[32px] p-6 border border-gray-700"
                  id="invoice-form"
                >
                  <BillFrom />
                  <BillTo />
                  <ItemList values={values} setFieldValue={setFieldValue} />
                </Form>
                <InvoicePreview values={values} />
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default InvoiceForm;
