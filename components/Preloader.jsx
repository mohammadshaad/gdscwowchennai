import Image from "next/image";
import PreloaderGif from "../assets/preloader-unscreen.gif";
import SeoComponent from "./Seo";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-full bg-white fixed top-0 left-0 z-9999">
      <SeoComponent
        title="GDSC WoW Chennai 2023"
        description={
          "India's premier student networking event bringing the brightest future talent together."
        }
        image={"../assets/banner.png"}
      />

      <Image src={PreloaderGif} alt="Loading..." className="w-1/2" />
    </div>
  );
};

export default Preloader;
