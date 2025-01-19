import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="min-h-[80vh] flex">
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden  ">
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
          <Image
            src="/Mobile.jpg"
            alt="Dashboard preview"
            className="h-full"
            fill
          />
        </div>
      </div>

      <div className="w-full lg:flex-1 border flex items-center justify-center px-5 ">
        {children}
      </div>
    </div>
  );
};

export default layout;
