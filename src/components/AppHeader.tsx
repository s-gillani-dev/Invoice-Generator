import Image from "next/image";
import React from "react";

const AppHeader = () => {
  return (
    <div className="w-full min-h-[72px] flex justify-center items-center border-b border-gray-50">
      <Image src="/logo.svg" width={32} height={32} alt="header logo" />
    </div>
  );
};

export default AppHeader;
