import { useState, useEffect } from "react";
import ContentBox from "../ContentBox";
import bottomLeft from "../../assets/icon.png";
import Image from "next/image";

const QuestionsSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const currentElement = document.getElementById("about");
      const elementPosition = currentElement.getBoundingClientRect().top + scrollY;

      if (scrollY > elementPosition - windowHeight + 3800) {
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
    <div className={`${isVisible ? "opacity-100 transition duration-1000 ease-in-out" : "opacity-0"} min-h-screen pt-14 md:pt-24 `} id="questions">
      <div className="absolute -translate-y-32  md:translate-y-[174rem] md:-bottom-[53rem] -left-14">
        <Image src={bottomLeft} alt="" className="w-28 md:w-32 opacity-30" />
      </div>
      <ContentBox
        title="Questions"
        content={
          "If you have any questions, please reach out to us at [email protected] or join our Discord server."
        }
        color="darkgreen"
        backdrop={"faqs"}
      />
    </div>
  );
};

export default QuestionsSection;
