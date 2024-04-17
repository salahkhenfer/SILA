"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonLang from "../ButtonLang/ButtonLang";
import { useTranslation } from "next-i18next";
import { getIntl } from "@/lib/intl";

function Header() {
  const { t } = useTranslation();

  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const pathname = usePathname();
  console.log(pathname);
  const handelOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0 || window.location.pathname !== "/") {
      setIsScrolled(true);
      // eslint-disable-next-line no-dupe-else-if
    } else if (window.location.pathname !== "/") {
      setIsScrolled(false);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed duration-400 w-screen z-50 flex  font-bold text-opacity-100 justify-center items-center 
      
        bg-primerColor  ${isScrolled && "bg-opacity-100"}`}
    >
      {/* desktop  */}
      <div className=" max-md:hidden w-[90%]  h-20 flex items-center justify-between  ">
        {/* <div className="w-[10%] self-start  h-20  flex items-center       text-primerColor text-4xl font-bold font-['Cairo']">
          سيلا
        </div> */}
        <Link href="/">
          <img
            className="w-20"
            src="https://sila-co.com/wp-content/uploads/2023/10/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.png"
            alt=""
          />
        </Link>
        <div
          dir="rtl"
          className="w-[40%]  h-20      flex items-center    justify-around  "
        >
          <Link href="/">
            <div className="  cursor-pointer hover:text-white text-xl   text-gray-300  text-xl font-normal font-['Cairo']">
              t('test')
            </div>
          </Link>
          <Link href="/ServicePage" onClick={() => setIsScrolled(true)}>
            <div className=" cursor-pointer    hover:text-white text-xl   text-gray-300  duration-200  font-normal font-['Cairo']">
              خدماتنا{" "}
            </div>
          </Link>
          <Link href="/AboutUs">
            <div className=" cursor-pointer   hover:text-white text-xl   text-gray-300   duration-200 font-normal font-['Cairo']">
              من نحن{" "}
            </div>
          </Link>
          {/* <div className="  cursor-pointer  text-white text-xl hover:text-primerColor  duration-200  font-normal font-['Cairo']">
            مشاريعنا{" "}
          </div> */}
          <Link href="/Contact">
            <div className=" cursor-pointer   hover:text-white text-xl   text-gray-300  duration-200  font-normal font-['Cairo']">
              أتصل بنا{" "}
            </div>
          </Link>
        </div>

        <div className="w-[15%] self-center  h-20  flex items-center justify-around  ">
          <ButtonLang />
        </div>
      </div>
      {/* mobil  */}
      <div className=" md:hidden z-50  w-[90%]  h-20 flex items-center justify-between     ">
        {/* <div className="  border px-3 py-2 w-fit  border-white self-center  h-fit rounded-lg  flex items-center       text-white text-xl  font-['Cairo']">
          تسجيل
        </div> */}
        {/* <div className="w-[10%] self-center  text-primerColor h-20  flex items-center     text-3xl font-bold font-['Cairo']">
          سيلا
        </div> */}
        <Link href="/">
          {/* <Image
            className="w-20"
            src="https://sila-co.com/wp-content/uploads/2023/10/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.png"
            alt=""
          /> */}
        </Link>
        <div className="  cursor-pointer" onClick={handelOpenMenu}>
          {!isOpenMenu ? (
            <div className=" text-white text-4xl font-semibold">X</div>
          ) : (
            <div className=" text-white text-4xl font-semibold">☰</div>
            // <Image src="/src/assets/menu.png" className="h-12 w-12 " alt="" />
          )}
        </div>

        <div
          dir="rtl"
          style={{ transform: `translateX(${isOpenMenu ? "-100%" : "0"})` }}
          className={`w-[100%]   translate-x-0 duration-500 
       
           h-screen top-20 pt-10  left-0 absolute text-center flex-col   bg-primerColor  justify-between  items-stretch  `}
        >
          <Link href="/" onClick={handelOpenMenu}>
            <div className=" my-5  cursor-pointer text-white hover:text-primerColor text-xl font-normal font-['Cairo']">
              الصفحة الرئيسية{" "}
            </div>
          </Link>
          <Link href="/ServicePage" onClick={handelOpenMenu}>
            <div className=" my-5 cursor-pointer    text-white text-xl  hover:text-primerColor  duration-200  font-normal font-['Cairo']">
              خدماتنا{" "}
            </div>
          </Link>
          <Link href="/AboutUs" onClick={handelOpenMenu}>
            <div className="  my-5 cursor-pointer   text-white text-xl  hover:text-primerColor  duration-200 font-normal font-['Cairo']">
              من نحن{" "}
            </div>
          </Link>
          {/* <div className="  cursor-pointer  text-white text-xl hover:text-primerColor  duration-200  font-normal font-['Cairo']">
            مشاريعنا{" "}
          </div> */}
          <Link href="/Contact" onClick={handelOpenMenu}>
            <div className=" my-5  cursor-pointer   text-white text-xl hover:text-primerColor  duration-200  font-normal font-['Cairo']">
              أتصل بنا{" "}
            </div>
          </Link>
          <div className=" w-[40%] mx-auto  h-20  flex self-center text-center    items-center    justify-around">
            <div className="  cursor-pointer  text-white text-xl hover:text-primerColor  duration-200  font-normal font-['Cairo']">
              تسجيل
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
