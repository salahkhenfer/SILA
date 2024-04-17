import { useTranslations } from "next-intl";
import { Link, locales } from "../../../navigation";
import { getLocale } from "next-intl/server";

export default function Index() {
  const t = useTranslations();
  const locale = getLocale();

  // Optional: Language Switcher Component (replace with your implementation)

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
      </div>
      <h1>{t("title")}</h1>
      <h1>{locale}</h1>
    </div>
  );
}
