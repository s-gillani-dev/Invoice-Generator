"use client"
import React from 'react'
interface InvoiceHeaderProps {
  resetForm: ()=> void
}

const InvoiceHeader = ({resetForm}: InvoiceHeaderProps) => {
  return (
    <div className="w-full h-[66px] flex justify-center gap-6 absolute top-[97px]">
        <div className="max-w-screen-xl h-full flex gap-5">
          <div className="w-[1194px] h-full space-y-1">
            <h1 className="text-3xl leading-[38px] text-dark font-medium">New Invoice</h1>
            <p className="text-base font-normal text-gray-400">Create new invoice for your customers</p>
          </div>
          <div className="w-[166px] h-[44px] flex gap-3">
            <button type='button' className="w-[80px] h-full rounded-lg btn-outline" onClick={()=> resetForm()}>Reset</button>
            <button type='submit' className="w-[74px] h-full rounded-lg btn-solid" form='invoice-form'>Save</button>
          </div>
        </div>
      </div>
  )
}

export default InvoiceHeader