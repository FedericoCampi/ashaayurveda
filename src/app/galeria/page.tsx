import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[250px]">
        <h3 className="text-[50px]">GALERÍA</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 w-full px-10">
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/1.webp'
                alt='1'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/2.webp'
                alt='2'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 sm:row-span-2 col-span-1 flex items-center justify-center h-[400px] sm:h-full">
            <Image
                src='/galeria/5.webp'
                alt='5'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/4.webp'
                alt='4'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/3.webp'
                alt='3'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-5 w-full py-20 px-10">
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/6.webp'
                alt='6'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/7.webp'
                alt='7'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center">
            <Image
                src='/galeria/8.webp'
                alt='8'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 sm:row-span-2 col-span-1 flex items-center justify-center h-[400px] sm:h-full">
            <Image
                src='/galeria/9.webp'
                alt='9'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center h-[400px]">
            <Image
                src='/galeria/10.webp'
                alt='10'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center h-[400px]">
            <Image
                src='/galeria/11.webp'
                alt='11'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center h-[400px]">
            <Image
                src='/galeria/12.webp'
                alt='12'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="row-span-1 col-span-1 flex items-center justify-center h-[400px]">
            <Image
                src='/galeria/13.webp'
                alt='13'
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
      </div>

    </div>
  );
};

export default Page;
