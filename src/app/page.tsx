import InvoiceForm from "@/components/InvoiceForm";
import InvoiceHeader from "@/components/InvoiceHeader";
import InvoicePreview from "@/components/InvoicePreview";

export default function Home() {
  return (
    <>
      <InvoiceHeader />
      <div className="w-full mt-[120px] mb-[70px]">
        <div className="w-full max-w-screen-xl min-h-[1076px] flex gap-6 mx-auto">
          <InvoiceForm />
          <InvoicePreview/>
        </div>
      </div>
    </>
  );
}
