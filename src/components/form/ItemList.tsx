"use client";
import React from "react";
import { FieldArray, FieldArrayRenderProps } from "formik";
import Input from "../common/Input"; // Adjust the import path as necessary
import Image from "next/image";
import plusIcon from "@/../public/plus-icon.svg";
import delIcon from "@/../public/delete-icon.svg";
import { handleTotalCalculation } from "@/utils/constant";
import { BillFrom } from "@/types/billFrom";
import { BillTo } from "@/types/billTo";
import { Item } from "@/types/items";

interface ItemListProps {
  values: {
    billFrom: BillFrom;
    billTo: BillTo;
    itemsList: Item[];
  };
  setFieldValue: (field: string, value: any) => void;
}

const ItemList = ({ values, setFieldValue }: ItemListProps) => {
  return (
    <div className="w-[628px] space-y-4">
      <h2 className="heading-2">Items List</h2>
      <FieldArray name="itemsList">
        {({ push, remove }: FieldArrayRenderProps) => (
          <>
            {values.itemsList.map((item: any, index: number) => (
              <div key={index} className="min-h-[70px] flex gap-4">
                <Input
                  name={`itemsList.${index}.itemName`}
                  label="Item Name"
                  placeholder="Enter item name"
                  className="w-[210px]"
                />

                <Input
                  name={`itemsList.${index}.qty`}
                  type="number"
                  label="Qty"
                  placeholder="Enter quantity"
                  className="w-[110px]"
                  setTotal={(val) =>
                    handleTotalCalculation({
                      field: "qty",
                      val,
                      index,
                      values,
                      setFieldValue,
                    })
                  }
                />

                <Input
                  name={`itemsList.${index}.price`}
                  type="number"
                  label="Price"
                  placeholder="Enter price"
                  className="w-[110px]"
                  setTotal={(val) =>
                    handleTotalCalculation({
                      field: "price",
                      val,
                      index,
                      values,
                      setFieldValue,
                    })
                  }
                />

                <Input
                  name={`itemsList.${index}.total`}
                  type="number"
                  label="Total"
                  placeholder="Total"
                  className="w-[110px]"
                  disabled={true}
                />
                <div className="w-[24px] min-h-[44px] flex items-center gap-2 pt-5">
                  <Image
                    src={delIcon}
                    width="0"
                    height="0"
                    alt="delete item icon"
                    onClick={() => remove(index)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push({ itemName: "", qty: 0, price: 0, total: 0 })}
              className="btn-solid w-full h-[44px] flex justify-center items-center gap-2"
            >
              <Image src={plusIcon} width="0" height="0" alt="add item icon" />
              Add Item
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default ItemList;
