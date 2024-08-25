"use client"
import InvoiceForm from "@/components/form/InvoiceForm";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function Home() {
  return (
    <>
    {/* we can keep it in layout as well, if we want to provide it for all pages!  */}
    <ApolloProvider client={client}>
      <InvoiceForm />
    </ApolloProvider>
    </>
  );
}
