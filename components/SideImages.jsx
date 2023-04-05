import Image from "next/image";
import topLeft from "../assets/topLeft.svg";
import topRight from "../assets/topRight.svg";
import bottomRight from "../assets/bottomRight.svg";
import bottomLeft from "../assets/icon.png";

function SideImages() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
      <div className="flex items-start justify-between">
        <Image src={topLeft} alt="" className="w-[50%] md:w-[30%]" />
        <Image src={topRight} alt="" className="w-[40%] md:w-[20%]" />
      </div>
      <div className="flex items-start justify-between ">
        <div className="absolute bottom-0 right-0 ">
          <Image src={bottomRight} alt="" className="w-60 md:w-96" />
        </div>
        {/* <div className="absolute -bottom-10 -left-14">
          <Image src={bottomLeft} alt="" className="w-32 opacity-30" />
        </div> */}
      </div>
    </div>
  );
}

export default SideImages;
