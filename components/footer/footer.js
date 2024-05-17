import React, {useState} from "react";
import { Font_ubuntu, Font_inter, Font_oreo } from "../my_font";
import Image from "next/image";
import { useTheme } from "next-themes";
function Footer() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="hidden lg:flex w-full flex-col items-center">
    <div className="w-10/12 flex flex-row h-[80px] justify-between items-center bg-white">
          <div className={`flex flex-col w-1/3`}>
            <h1
              className={`font-bold ${Font_inter.className} text-[24px] text-black`}
            >
              Find amazing deals on the go.
            </h1>
            <h2
              className={`font-bold ${Font_inter.className} text-[24px] text-red-600`}
            >
              Download the app now!
            </h2>
          </div>
          <div className={`flex flex-row justify-end w-2/3 h-full gap-1`}>
           <Image
              src="/assets/imgs/p1.png"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-md w-[150px] object-contain object-center mr-2"
            />

<Image
              src="/assets/imgs/p2.png"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-md w-[150px] object-contain object-center"
            />


<Image
              src="/assets/imgs/p3.png"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-md w-[150px] object-contain object-center"
            />

<Image
              src="/assets/imgs/p4.svg"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-md w-[150px] object-contain object-center"
            />


          </div>
        </div>
    <div className="hidden lg:flex w-full mt bg-gray-100 justify-center items-center p-4">
      <div className="w-10/12 flex flex-col ">
        
        <div className="w-full">
          <ul className="grid grid-cols-6 p-4">
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              Company
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  About Us
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Advertising
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Careers
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Terms of Use
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Privacy Policy
                </li>
              </ul>
            </li>
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              EAC
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Rwanda
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Burundi
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Uganda
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  RDC
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Kenya
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Tanzania
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  South Sudan
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Ethiopia
                </li>
              </ul>
            </li>
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              Other Countries
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Canada
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  USA
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Sweden
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Dubai
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Belgium
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  China
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Tchad
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Oman
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Quatar
                </li>
              </ul>
            </li>
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              Get Social
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Facebook
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Twitter
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Youtube
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Instagram
                </li>
              </ul>
            </li>
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              Support
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Help
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Contact Us
                </li>
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Call Us
                </li>
              </ul>
            </li>
            <li className={`font-bold ${Font_inter.className} text-lg`}>
              Languages
              <ul
                className={`font-normal ${Font_inter.className} text-[15px] cursor-pointer text-blue-500`}
              >
                <li
                  className={`font-normal ${Font_inter.className} text-[15px] mt-2 cursor-pointer hover:text-red-500`}
                >
                  Arabic
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          className={`w-full flex flex-row justify-between items-center p-4 `}
        >
          <div>
            <Image
              src="/assets/imgs/expelogo.png"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-md w-[120px] h-[120px] object-contain object-center"
            />
            <p className={`font-normal text-gray-500 text-[12px]`}>
              © ebuzz.com 2024, All Rights Reserved.
            </p>
          </div>
          <div>
            <Image
              src="/assets/imgs/scheme-certification.jpg"
              alt="Ebuzz Logo"
              width={50}
              height={50}
              unoptimized
              loading = 'lazy' 
              placeholder="blur" 
              blurDataURL="data:image/jpeg;base64,<your-base64-encoded-image>"
              className="rounded-full w-[120px] object-contain object-center filter grayscale"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
