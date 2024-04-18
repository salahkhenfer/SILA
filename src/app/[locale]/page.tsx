import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import Hero from "@/components/hero/Hero";

export default function Index() {
  // const t = useTranslations();
  // const locale = getLocale();

  // Optional: Language Switcher Component (replace with your implementation)

  return <Hero />;
}
