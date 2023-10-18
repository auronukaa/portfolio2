import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import HomeReno from "@/app/iphone.png";
import Container from "./container";

const Main = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center h-[40px] m-5 items-center">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            .sitesculpting
          </span>
        </div>
        <div className="mx-2 my-12 md:my-24">
          <div className="flex items-center flex-col gap-y-5">
            <h1 className="text-headerMobile sm:text-headerMd lg:text-header font-bold text-white tracking-[-0.04em] px-2 sm:tracking-tight w-full text-center leading-[1.1]">
              {/* Give Your Home
              <br className="inline sm:hidden" /> Remodeling
              <br className="hidden sm:inline" /> Business A
              <span className="text-yellow-400"> Hardworking</span> Website */}
              Are You Ready To Experience a Website That{" "}
              <span className="text-yellow-400">Works As Hard</span> As You Do?
            </h1>

            <div className="w-full flex items-center justify-center">
              <p className="text-paraMobile sm:text-para max-w-[600px] text-center leading-5 sm:leading-6 font-normal text-[#c5c5c5] px-2">
                We sculpt websites that boost conversion rates, instill trust
                and drive more sales.
              </p>
            </div>

            <Button className="flex justify-center tracking-tight items-center w-[90%] sm:w-fit text-paraMobile sm:mt-5 uppercase font-semibold">
              book a free call
              <FiArrowRight size={20} className="ml-2" />
            </Button>
          </div>
          <div className="mt-14 flex flex-col items-center">
            <Image src={HomeReno} className="rounded-md object-cover w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
