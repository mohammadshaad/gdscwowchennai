import { useState, useEffect } from "react";
import Image from "next/image";
import ContentBox from "../ContentBox";
import ChennaiSkyline from "assets/chennaiSkyline.svg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const currentElement = document.getElementById("about");
      const elementPosition = currentElement.getBoundingClientRect().top + scrollY;

      if (scrollY > elementPosition - windowHeight + 200) {
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
    <div className={`${isVisible ? "opacity-100 transition duration-1000 ease-in-out" : "opacity-0"} min-h-screen pt-14 md:pt-24`} id="about">
      <ContentBox title="About us" color="selectiveyellow" >
        <p className={`text-black/75 text-xl md:text-2xl lg:text-3xl leading-10 min-h-[360px] flex items-center `}>
          GDSC Wonder of Wonders is an astronomical, country-wide, in-person,
          annual, student-centric technical fest maneuvered by 400+ GDSCs and
          200+ colleges with over 20K events each year all over India.
        </p>
        <Image src={ChennaiSkyline} alt="" className="absolute -bottom-2 right-1 scale-75 md:scale-105 " />
      </ContentBox>
    </div>
  );
};

export default AboutSection;
