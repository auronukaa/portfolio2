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
          <h2 className="capitalize text-header2Mobile sm:text-headerMd2 font-bold text-white tracking-tight w-full text-center leading-tight pb-5">
            Are you facing any of these
            <br className="inline" />
            <span className="text-yellow-400"> problems</span> ?
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center py-4">
            <div className="flex items-start flex-col gap-y-2 border border-neutral-800 p-4 w-full">
              <CgDanger className="text-yellow-400" size={25} />
              <p className="text-[#c5c5c5] text-base w-full leading-tight">
                You are leading potential clients to a website or homepage that
                doesn&apos;t convert.
              </p>
            </div>
            <div className="flex items-start flex-col gap-y-2 border mx-3 my-4 border-neutral-800 p-4 w-full">
              <CgDanger className="text-yellow-400" size={25} />
              <p className="text-[#c5c5c5] text-base w-full leading-tight">
                You don&apos;t feel like people trust you or your product.
              </p>
            </div>
            <div className="flex items-start flex-col gap-y-2 border border-neutral-800 p-4 w-full">
              <CgDanger className="text-yellow-400" size={25} />
              <p className="text-[#c5c5c5] text-base w-full leading-tight">
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
