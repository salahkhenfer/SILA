import Image from "next/image";
import enFlag from "../../assets/enFlag.png";
import dowanRaw from "../../assets/downRaw.svg";
function ButtonLang() {
  const handleChangeLanguage = (language: string) => {
    // Add logic to change the language here
    if (language === "arabic") {
      // Logic for changing to Arabic language
    } else if (language === "french") {
      // Logic for changing to French language
    }
  };

  return (
    <div
      className="w-fit h-10 px-5 rounded-lg border border-white justify-center items-center gap-4 inline-flex"
      onClick={() => handleChangeLanguage("english")}
    >
      <Image className="w-6 h-6 rounded-full" src={enFlag} alt="English flag" />
      <div className="text-white  text-sm font-medium ">English</div>
      <Image src={dowanRaw} alt="dowanRaw" />
    </div>
  );
}

export default ButtonLang;
