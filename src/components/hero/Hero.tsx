"use client";
import Link from "next/link";
import { useInView } from "framer-motion";
import Imag from "../../assets/downloads (1).png";
import download from "../../assets/downloads (1).png";
import Line from "../../assets/Line.svg";
import hero from "../../assets/backgroundHero.png";
import Image from "next/image";
import { useRef } from "react";
import Customer from "../../assets/CustomerHero.png";
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{ background: `url(${hero})` }}
      className="   relative max-md:overflow-hidden bg-black  w-screen h-screen     max-md:max-h-screen  z-10"
    >
      <Image src={hero} className="w-full absolute h-full" alt={""} />

      <div className=" absolute bg-primerColor    bg-opacity-60 bg-black  w-full h-full " />
      <div
        ref={ref}
        className=" max-md:hidden maw-w-[1300px] mx-auto   relative flex justify-between max-w-[1345px] max-h-[650px]  w-screen h-screen pt-20"
      >
        <div className="text-white h-fit w-1/2 pl-20 pt-10">
          <div
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(-10px)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
            }}
            className=" w-[80%]  flex justify-center h-fit   mt-10 mx-auhref text-4xl text-normal leading-10   "
          >
            From Ads to Social Media, We&apos;re Your All-in-One Solution
          </div>
          <div className="w-[80%] h-fit text-white text-2xl font-normal leading-9 tracking-wide ">
            With sila agency make your business easy
          </div>
          <div className="w-96 h-16 px-4 py-4 hover:bg-transparent  duration-200 border cursor-pointer hover:text-violet-700 border-violet-700 mt-10 bg-violet-700 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="text-white text-xl font-medium ">
              See our services
            </div>
          </div>
        </div>

        <div className="flex justify-center  flex-1 items-start pt-20  ">
          <Image src={Customer} className="  " alt={""} />
        </div>
      </div>

      <div className=" md:hidden    mx-auhref relative  flex-col justify-between max-w-[1400px] max-h-screen  w-screen h-screen pt-32">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
          }}
          className=" flex justify-center h-24  mx-auhref text-right text-white text-5xl font-bold font-['Cairo'] "
        >
          وكالة سيلا{" "}
        </div>

        <div
          style={{
            transform: isInView ? "none" : "translateY(-10px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
          }}
          className="flex flex-col h-fit justify-between   text-2xl text-center text-white max-md:mt-10 max-md:max-w-full"
        >
          <div className="self-center max-md:max-w-full w-[90%]">
            وكالة تسويق التجارة الإلكترونية توفر لكم فريق من الخبراء في التجارة
            الالكترونية و التسويق الاكتروني
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateY(-10px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
            }}
            className="   self-center w-[50%] mt-10"
          >
            <div className=" flex  w-fit h-fit gap-4 px-6 py-4 text-xl text-black whitespace-nowrap bg-white   rounded-[50px]">
              <a href="https://play.google.com/shrefre/apps/details?id=com.silaagency.sila">
                <div className="grow  my-auhref"> تنزيل التطبيق </div>
              </a>
            </div>{" "}
            {/* <div className=" flex   w-fit h-fit gap-4 px-6 py-4 text-xl text-white whitespace-nowrap bg-primerColor  rounded-[50px]">
              <div className="grow  my-auhref"> تنزيل التطبيق </div>
            </div>{" "} */}
          </div>
        </div>

        <div
          style={{
            transform: isInView ? "none" : "translateY(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
          }}
          className=" absolute bothrefm-0 max-h-20 right-0"
        >
          <Image
            loading="lazy"
            src={Imag}
            className="w-full   aspect-[1.16] fill-white max-w-[392px]" alt={""}          />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateY(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
          }}
          className=" absolute -bothrefm-0 left-0"
        >
          <Image loading="lazy" src={Line} className="w-full   " alt={""} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
