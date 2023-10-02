import { cn } from "@/lib/utils";
import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import HomeReno from "@/app/BA.jpeg";
import Container from "./container";

const Main = () => {
  return (
    <div>
      <Container>
        {/* <div className="bg-main absolute w-full inset-0 -z-10 opacity-20">
        <div className="bg-fade absolute inset-0" />
      </div> */}

        <svg class="bg-main" aria-hidden="true">
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="100"
              height="100"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>

        <div className="flex justify-center h-[40px] m-5 items-center">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            .sitesculpting
          </span>
        </div>
        <div className="mx-2 my-12 md:my-24">
          <div className="flex items-center flex-col gap-y-7">
            <h1 className="text-headerMobile sm:text-headerMd lg:text-header font-bold text-white tracking-tight w-full text-center leading-tight px-2">
              Give Your Home Remodeling
              <span className="hidden sm:block"></span> Business A
              <span className="text-yellow-400"> Hardworking</span> Website!
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

            <div className="w-full flex items-center justify-center">
              <p className="text-paraMobile sm:text-para max-w-[600px] text-center tracking-tight leading-5 sm:leading-6 font-normal text-[#C5C5C5]">
                We sculpt websites that boost conversion rates, instill trust
                and drive more sales.
              </p>
            </div>

            <Button className="flex justify-center tracking-widest items-center w-full sm:w-fit text-paraMobile sm:mt-4 uppercase font-semibold">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
