"use client"
import React from "react";
import { Item } from "@/types/items";

interface ItList { itemsList: Item[] }

const ItemsList = ({ itemsList }: ItList) => {
  return (
    <div>
      <div className="h-[38px] flex text-md-normal text-gray-300 bg-gray-100 px-2 rounded justify-between items-center">
        <span className="w-[164px]">Item</span>
        <span className="w-[120px]">Qty</span>
        <span className="w-[140px]">Price</span>
        <span className="w-[140px] text-right">Total Amount</span>
      </div>
      {itemsList.map((item, index) => (
        <div
          key={index}
          className="h-[38px] flex justify-between items-center px-2 text-md-medium text-dark"
        >
          <span className="w-[164px]">{item.itemName}</span>
          <span className="w-[120px]">{item.qty}</span>
          <span className="w-[140px]">{item.price}</span>
          <span className="w-[140px] text-right">{item.total}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
