import { useState, useEffect } from "react";
import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const GDSCSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const currentElement = document.getElementById("about");
      const elementPosition = currentElement.getBoundingClientRect().top + scrollY;

      if (scrollY > elementPosition - windowHeight + 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isVisible ? "opacity-100 transition duration-1000 ease-in-out" : "opacity-0"} min-h-screen pt-14 md:pt-24 `} id="gdsc">
      <div className="absolute -translate-y-32 md:translate-y-[130rem] md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-28 md:w-32 opacity-30" />
      </div>
      <ContentBox title={"GDSCs"} color="selectiveyellow" backdrop="Organizers">
        <ul className="text-black/75 text-xl md:text-2xl lg:text-3xl leading-10">
          <li>VIT Chennai</li>
          <li>Chennai Institute of Technology</li>
          <li>SRM, Ramapuram</li>
          <li>VELTech</li>
          <li>NIT Trichi</li>
          <li>PSG Tech, Chennai</li>
        </ul>
      </ContentBox>
    </div>
  );
};

export default GDSCSection;
