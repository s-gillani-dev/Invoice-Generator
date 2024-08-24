import React from "react";

const InvoicePreview = () => {
  return (
    <div className="w-[676px] min-h-full rounded-3xl gap-4 bg-gray-100 p-6">
      <div className="w-[628px] h-[38px] flex gap-4">
        <h2 className="text-lg text-dark">Preview</h2>
      </div>
      <div className="w-[628px] min-h-[534px] flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-lg"></div>
    </div>
  );
};

export default InvoicePreview;
