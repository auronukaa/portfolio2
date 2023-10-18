import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import { FaHandshakeSimple, FaHandHoldingDollar } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { CgIfDesign } from "react-icons/cg";

const Benefits = () => {
  return (
    <div className="px-2 mt-10 sm:px-0 w-full">
      <div>
        <h1 className="capitalize text-[22px] sm:text-4xl font-semibold text-white tracking-tight w-full text-center leading-tight pb-2">
          We Will<span className="text-yellow-400"> Tackle</span> all these
          issues head-on
        </h1>
      </div>
      <div className="w-full sm:w-[80%] flex mx-auto flex-col items-center sm:px-4">
        <div className="pt-10 sm:pt-20 flex flex-col items-center w-full">
          <div className="border border-neutral-800 p-5 md:p-10 w-full rounded-md">
            <FaHandshakeSimple className="text-yellow-400 mb-4 text-[30px] md:text-[40px]" />

            <h2 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
              Win Prospects Trust
            </h2>
            <p className="text-base md:text-xl text-[#C5C5C5] w-full leading-tight">
              We will build you a powerful online presence that will instill
              trust into your prospects.
            </p>
          </div>
        </div>
        <div className="pt-5 flex flex-col items-center w-full">
          <div className="border border-neutral-800 p-5 md:p-10 w-full rounded-md">
            <IoIosRocket className="text-yellow-400 mb-4 text-[30px] md:text-[40px]" />

            <h2 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
              Boost Conversion Rate
            </h2>
            <p className="text-base md:text-xl text-[#C5C5C5] tracking-tight w-full leading-tight">
              We will fully optimize your website so you will get higher
              conversion rates and gain more clients.
            </p>
          </div>
        </div>
        <div className="pt-5 flex flex-col items-center w-full">
          <div className="border border-neutral-800 p-5 md:p-10  w-full rounded-md">
            <CgIfDesign className="text-yellow-400 mb-4 text-[30px] md:text-[40px]" />

            <h2 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
              On-Brand Design
            </h2>
            <p className="text-base md:text-xl text-[#C5C5C5] tracking-tight w-full leading-tight">
              We will do high quality branding so you win over your competition.
            </p>
          </div>
        </div>
        <div className="pt-5 flex flex-col items-center w-full">
          <div className="border border-neutral-800 p-5 md:p-10 w-full rounded-md">
            <FaHandHoldingDollar className="text-yellow-400 mb-4 text-[30px] md:text-[40px]" />

            <h1 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
              Get more Sales
            </h1>
            <p className="text-base md:text-xl text-[#C5C5C5] tracking-tight w-full leading-tight">
              We will show your wins to your prospects so you will win their
              trust and their money.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center my-12">
          <Button className="flex justify-center tracking-tight items-center w-[90%] sm:w-fit text-paraMobile uppercase font-bold">
            book a free call
            <FiArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
