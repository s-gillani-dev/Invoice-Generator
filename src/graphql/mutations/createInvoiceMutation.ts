// This is just assumed mutation, I didn't spent more time to find the required mutaion.
//  but i have created the flow for demonstrative purposes, and using it to submit invoice data  
import { gql } from '@apollo/client';
export const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoice(
    $clientName: String!,
    $clientEmail: String!,
    $companyName: String!,
    $companyEmail: String!,
    $streetAddress: String!,
    $city: String!,
    $postalCode: String!,
    $country: String!,
    $items: [ItemInput!]!,
    $invoiceDate: String!,
    $paymentTerms: String!,
    $projectDescription: String!
  ) {
    createInvoice(
      clientName: $clientName,
      clientEmail: $clientEmail,
      companyName: $companyName,
      companyEmail: $companyEmail,
      streetAddress: $streetAddress,
      city: $city,
      postalCode: $postalCode,
      country: $country,
      items: $items,
      invoiceDate: $invoiceDate,
      paymentTerms: $paymentTerms,
      projectDescription: $projectDescription
    ) {
      id
      clientName
      clientEmail
      companyName
      companyEmail
      streetAddress
      city
      postalCode
      country
      items {
        itemName
        qty
        price
        total
      }
      invoiceDate
      paymentTerms
      projectDescription
    }
  }
`;
