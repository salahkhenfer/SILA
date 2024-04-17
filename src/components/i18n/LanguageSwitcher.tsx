import Link from "next/link";
import React from "react";
const LanguageSwitcher = () => {
  return (
    <div>
      <Link href="/" locale="en">
        en
      </Link>
      <Link href="/" locale="ar">
        en
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
