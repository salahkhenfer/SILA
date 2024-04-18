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
import { t } from "i18next";
import { useTranslations } from "next-intl";
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations();

  return (
    <div
      ref={ref}
      style={{ background: `url(${hero})` }}
      className="   relative max-md:overflow-hidden  bg-black  w-screen h-screen    max-md:max-h-screen  z-10"
    >
      <Image
        src={hero}
        className="md:w-full bg-cover absolute h-full"
        alt={""}
      />

      <div className=" absolute bg-primerColor    bg-opacity-60 bg-black  w-full h-full " />
      <div
        ref={ref}
        className="  maw-w-[1300px] mx-auto   relative flex justify-between  max-h-[650px]  w-screen h-screen pt-20 "
      >
        <div className="text-white h-fit w-full md:w-1/2 px-20 pt-10">
          <div className=" md:w-[80%]  flex justify-center h-fit   mt-10 mx-auhref text-4xl text-normal leading-10   ">
            {" "}
            {t("silaDescription1")}
          </div>
          <div className="md:w-[80%] h-fit text-white text-2xl font-normal leading-9 tracking-wide ">
            {t("silaDescription2")}
          </div>
          <div className="md:w-96 md:h-16 px-4 py-4 hover:bg-transparent  duration-200 border cursor-pointer hover:text-violet-700 border-violet-700 mt-10 bg-violet-700 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="text-white text-xl font-medium ">
              {t("SeeOurServices")}
            </div>
          </div>
        </div>

        <div className=" max-md:hidden flex justify-center  flex-1 items-start pt-20  ">
          <Image src={Customer} className="  " alt={""} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
