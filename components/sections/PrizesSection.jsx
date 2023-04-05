import { useState, useEffect } from "react";
import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const PrizesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const currentElement = document.getElementById("about");
      const elementPosition = currentElement.getBoundingClientRect().top + scrollY;

      if (scrollY > elementPosition - windowHeight + 1000) {
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
    <div className={`${isVisible ? "opacity-100 transition duration-1000 ease-in-out" : "opacity-0"} min-h-screen pt-14 md:pt-24 `} id="prizes">
      <div className="absolute -translate-y-32 md:translate-y-[50rem] md:-bottom-10 -left-14">
        <Image src={bottomLeft} alt="" className="w-28 md:w-32 opacity-30" />
      </div>
      <ContentBox
        title="Prizes"
        content={
          "We are excited to announce that we will be giving out prizes to the top 3 teams in each category. The prizes are as follows:"
        }
        color="darkgreen"
      />
    </div>
  );
};

export default PrizesSection;
