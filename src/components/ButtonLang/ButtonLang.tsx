"use client";
import Image from "next/image";
import enFlag from "../../assets/enFlag.png";
import dowanRaw from "../../assets/downRaw.svg";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
function ButtonLang() {
  const handleChangeLanguage = (language: string) => {
    // Add logic to change the language here
    if (language === "arabic") {
      // Logic for changing to Arabic language
    } else if (language === "french") {
      // Logic for changing to French language
    }
  };

  const t = useTranslations();
  const defaultLocale = useLocale();

  return (
    <div
      className="w-fit h-10 px-5 rounded-lg border border-white justify-center items-center gap-4 inline-flex"
      onClick={() => handleChangeLanguage("english")}
    >
      {defaultLocale ? (
        <div>
          <Image
            className="w-6 h-6 rounded-full"
            src={enFlag}
            alt="English flag"
          />
          <Link
            href="/"
            locale="en"
            className="text-white  text-sm cursor-pointer font-medium "
          >
            {t("lang")}
          </Link>
        </div>
      ) : (
        <div>
          <Image
            className="w-6 h-6 rounded-full"
            src={enFlag}
            alt="English flag"
          />
          <Link
            href="/"
            locale="ar"
            className="text-white  text-sm font-medium cursor-pointer "
          >
            {t("lang")}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ButtonLang;
