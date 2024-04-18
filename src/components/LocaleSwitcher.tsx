import clsx from "clsx";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { locales } from "@/config";

type Props = {
  locale: (typeof locales)[number];
};

export default function LocaleSwitcher() {
  const curLocale = useLocale();

  return (
    <Link
      href="/"
      locale={curLocale === "en" ? "ar" : "en"}
      className={clsx("text-white")}
    >
      {curLocale.toUpperCase() === "EN" ? "عربي" : "English"}
    </Link>
  );
}
