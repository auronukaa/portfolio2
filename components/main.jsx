import { cn } from "@/lib/utils";
import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import HomeReno from "@/app/BA.jpeg";

const Main = () => {
  return (
    <div className="px-2 my-12 md:my-24">
      <div>
        <div className="flex items-center flex-col gap-y-7">
          <h1 className="text-headerMobile sm:text-headerMd lg:text-header font-bold text-white tracking-tight w-full text-center leading-tight">
            <span className="block">
              Give Your Home Remodeling
              <span className="sm:hidden inline"> Business </span>
            </span>
            <span className="sm:inline hidden"> Business </span>
            <span>
              A <span className="text-yellow-400">Hardworking</span> Website!
            </span>
          </h1>

          {/* <div className="text-sm sm:text-lg my-5 sm:my-8 w-[90%] sm:w-[50%] text-neutral-600 flex flex-col">
            <div className="flex items-center gap-x-3">
              <BsFillRocketTakeoffFill
                color="#2253F5"
                size={24}
                className="bg-blue-100 p-1 rounded-sm"
              />
              <h2 className="font-normal text-base">Boost conversion rates.</h2>
            </div>
            <div className="flex items-center gap-x-3 my-2">
              <FaHandshake
                color="#2253F5"
                size={24}
                className="bg-blue-100 p-1 rounded-sm"
              />
              <h2 className="font-normal text-base">Instill trust.</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <IoStatsChart
                color="#2253F5"
                size={24}
                className="bg-blue-100 p-1 rounded-sm"
              />
              <h2 className="font-normal text-base">And drive more sales.</h2>
            </div>
          </div> */}
          <div>
            <p className="text-paraMobile sm:text-para max-w-3xl sm:max-w-2xl text-center tracking-tight leading-5 sm:leading-6 font-normal text-[#C5C5C5]">
              We sculpt websites that boost conversion rates, instill trust and
              drive more sales.
            </p>
          </div>

          <Button className="flex justify-center tracking-widest items-center w-full sm:w-fit text-paraMobile uppercase font-semibold">
            book a free call
            <FiArrowRight size={20} className="ml-2" />
          </Button>

          <div className="mt-7 flex flex-col items-center">
            <Image
              src={HomeReno}
              width={1000}
              height={641}
              className="rounded-md"
            />
            <h1 className="text-white text-header2Mobile sm:text-headerMd md:text-header text-center font-bold mt-5 md:mt-10 w-full capitalize">
              Let's give your website a total makeover ,
              <span className="lg:block"> like you do with homes!</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
