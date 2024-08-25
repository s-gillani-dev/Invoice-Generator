"use client"
import React from "react";

interface TotalsProps {
  subtotal: number;
  total: number;
}

const Totals = ({ subtotal, total }: TotalsProps) => {
  return (
    <div>
      <div className="h-[38px] flex justify-end items-center text-md-semibold text-dark">
        <span className="w-[164px]">Subtotal</span>
        <span className="w-[120px] text-right">${subtotal?.toFixed(2)}</span>
      </div>
      <div className="h-[38px] flex justify-end items-center text-md-semibold text-dark">
        <span className="w-[164px]">Tax</span>
        <span className="w-[120px] text-right">10%</span>
      </div>
      <div className="h-[38px] flex justify-end items-center text-md-bold text-dark">
        <span className="w-[164px]">Total</span>
        <span className="w-[120px] text-right">${total?.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Totals;
