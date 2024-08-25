import { OptionType } from "@/types/selectProps";
import { StylesConfig } from "react-select";
import * as Yup from "yup";
interface TotalCalculateParams {
  field: string;
  val: number | string;
  index: number;
  values: any; // Replace 'any' with a more specific type if possible
  setFieldValue: (field: string, value: any) => void;
}

// validation schema for invoice form
export const invoiceSchema = Yup.object().shape({
  billFrom: Yup.object().shape({
    companyName: Yup.string().required("Company Name is required"),
    companyEmail: Yup.string()
      .email("Invalid email")
      .required("Company Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    streetAddress: Yup.string().required("Street Address is required"),
  }),
  billTo: Yup.object().shape({
    clientName: Yup.string().required("Client’s Name is required"),
    clientEmail: Yup.string()
      .email("Invalid email")
      .required("Client’s Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    streetAddress: Yup.string().required("Street Address is required"),
    invoiceDate: Yup.date().required("Invoice Date is required"),
    // paymentTerms: Yup.string().required('Payment Terms are required'),
    paymentTerms: Yup.string()
      .oneOf(
        ["NET_10_DAYS", "NET_20_DAYS", "NET_30_DAYS"],
        "Invalid payment term"
      )
      .required("Payment Terms are required"),
    projectDescription: Yup.string().required(
      "Project Description is required"
    ),
  }),
  itemsList: Yup.array()
    .of(
      Yup.object().shape({
        itemName: Yup.string().required("Name is required"),
        qty: Yup.number()
          .required("Qty is required")
          .min(1, "Must be at least 1"),
        price: Yup.number()
          .required("Price is required")
          .min(1, "Must be at least 1"),
        total: Yup.number().required("Total is required"),
      })
    )
    .min(1, "At least one item is required"),
});

// Initial values for invoice form
export const initialValues = {
  billFrom: {
    companyName: "",
    companyEmail: "",
    country: "",
    city: "",
    postalCode: "",
    streetAddress: "",
  },
  billTo: {
    clientName: "",
    clientEmail: "",
    country: "",
    city: "",
    postalCode: "",
    streetAddress: "",
    invoiceDate: new Date().toISOString().split("T")[0],
    paymentTerms: "",
    projectDescription: "",
  },
  itemsList: [],
};

export const handleTotalCalculation = ({
  field,
  val,
  index,
  values,
  setFieldValue,
}: TotalCalculateParams) => {
  const qty = field === "qty" ? val : values?.itemsList[index]?.qty;
  const price = field === "price" ? val : values?.itemsList[index]?.price;
  const total = qty * price;

  // Assuming `setFieldValue` is defined and accessible in the scope
  setFieldValue(`itemsList.${index}.total`, total);
};

// custom style for CountrySelect component
export   const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    width: "100%", // Equivalent to 'w-full'
    height: "44px",
    borderColor: "#D0D5DD", // Tailwind class 'border-gray-700'
    borderRadius: "0.375rem", // Tailwind class 'rounded-lg'
    borderWidth: "1px", // Ensure border thickness is equivalent to Tailwind's border class
    boxShadow: "none",
    minHeight: "44px",
    "&:hover": {
      borderColor: "#101828",
      borderWidth: "2px",
    },
  }),
  option: (provided) => ({
    ...provided,
    background: "#ffffff",
    color: "#101828",
    width: "100%", // Equivalent to 'w-full'
    height: "40px",
    padding: "10px 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F9FAFB",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#344054", // Tailwind class 'text-gray-400'
    fontSize: "14px",
  }),
};
// payment Terms list data
export const paymentTerms = [
  { label: "Net 10 days", value: "NET_10_DAYS" },
  { label: "Net 20 days", value: "NET_20_DAYS" },
  { label: "Net 30 days", value: "NET_30_DAYS" },
];
