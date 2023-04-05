import Image from "next/image";
import bottomLeft from "../assets/icon.png";

const Icon = () => {
  <div className="absolute -bottom-10 -left-14">
    <Image src={bottomLeft} alt="" className="w-32 opacity-30" />
  </div>;
};

export default Icon;
