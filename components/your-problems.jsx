import Image from "next/image";
import Container from "./container";
import { CgDanger } from "react-icons/cg";
import bg from "@/app/bg.webp";
import Benefits from "./benefits";

const YourProblems = () => {
  return (
    <div className="w-full px-4 sm:px-0 md:my-10 py-10 md:py-20 relative">
      <div className="absolute inset-0 image-background border-y-[1px] border-neutral-700" />
      <Container>
        <div>
          <h3 className="capitalize text-[24px] sm:text-5xl font-bold text-white tracking-tight w-full text-center leading-tight pb-5">
            Are you facing any of these
            <br className="inline" />
            <span className="text-yellow-400"> problems</span> ?
          </h3>

          <div className="flex flex-col md:flex-row justify-center pl-4 items-center py-5 sm:py-10">
            <div className="flex items-start flex-col gap-y-3 p-4 w-full">
              <div className="flex items-center justify-center gap-x-2">
                <h2 className="text-black bg-yellow-400 p-3 mr-1 sm:p-4 text-base lg:text-xl h-[5px] w-[5px] flex items-center justify-center rounded-full font-bold">
                  1
                </h2>
                <p className="text-yellow-400 text-base lg:text-xl font-bold">
                  Page that doesn't convert
                </p>
              </div>
              <p className="text-[#c5c5c5] text-base w-full leading-tight">
                You are leading potential clients to a website or homepage that
                doesn&apos;t convert.
              </p>
            </div>
            <div className="flex items-start flex-col gap-y-3  mx-3 my-4  p-4 w-full">
              <div className="flex items-start lg:items-center text-center justify-center gap-x-2">
                <h2 className="text-black bg-yellow-400 p-3 mr-1 sm:p-4 text-base lg:text-xl h-[5px] w-[5px] flex items-center justify-center rounded-full font-bold">
                  2
                </h2>
                <p className="text-yellow-400 text-base lg:text-xl font-bold">
                  People don't trust you
                </p>
              </div>
              <p className="text-[#c5c5c5] text-base w-full leading-tight">
                You don&apos;t feel like people trust you or your product.
              </p>
            </div>
            <div className="flex items-start flex-col gap-y-3 p-4 w-full">
              <div className="flex items-start lg:items-center justify-center gap-x-2">
                <h2 className="text-black bg-yellow-400 p-3 mr-1 sm:p-4 text-base lg:text-xl h-[5px] w-[5px] flex items-center justify-center rounded-full font-bold">
                  3
                </h2>
                <p className="text-yellow-400 text-base lg:text-xl font-bold">
                  Pressure from competition
                </p>
              </div>
              <p className="text-[#c5c5c5] w-full leading-tight">
                You feel pressure from your competition because of their brand
                and prospect stealing.
              </p>
            </div>
          </div>
        </div>

        <Benefits />
      </Container>
    </div>
  );
};

export default YourProblems;
