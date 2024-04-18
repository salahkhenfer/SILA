import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

const poppinsFont = Poppins({
  subsets: ["latin"],
  // Optional: Define a CSS variable for font customization
  weight: "400", // Optional: Specify font weight
  // ... other options
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: t("title"),
  };
}
export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  const t = useTranslations();

  unstable_setRequestLocale(locale);

  return (
    <html lang={t("locale")} dir={`${t("locale") !== "en" ? "rtl" : "ltr"}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body className={poppinsFont.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
