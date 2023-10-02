import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import Container from "./container";

const Benefits = () => {
  return (
    <div className="px-2 sm:px-0">
      <Container>
        <div>
          <p className="text-md lg:text-xl text-[#C5C5C5] tracking-tight w-full text-center leading-tight pb-3">
            FOUR REASONS
          </p>
          <h1 className="capitalize text-header2Mobile sm:text-headerMd2 font-bold text-white tracking-tight w-full text-center leading-tight pb-4">
            Why you should choose us
          </h1>
        </div>
        <div className="w-full sm:w-[80%] flex mx-auto flex-col items-center sm:px-4">
          <div className="pt-10 sm:pt-20 flex flex-col items-center w-full">
            <div className="border border-neutral-800 p-5 md:p-10 rounded-md">
              {/* <FaHandshake size={40} className="text-yellow-400 mb-4" /> */}
              <h2 className="text-black bg-yellow-400 mb-3 p-3 sm:p-5 text-base sm:text-xl h-[10px] w-[10px] flex items-center justify-center rounded-full font-bold">
                1
              </h2>
              <h1 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
                Win Prospects Trust
              </h1>
              <p className="text-sm md:text-[17px] text-[#C5C5C5] tracking-tight w-full leading-tight">
                We will build you a powerful online presence that will instill
                trust into your prospects.
              </p>
            </div>
          </div>
          <div className="pt-5 flex flex-col items-center w-full">
            <div className="border border-neutral-800 p-5 md:p-10 rounded-md">
              <h2 className="text-black bg-yellow-400 mb-3 p-3 sm:p-5 text-base sm:text-xl h-[10px] w-[10px] flex items-center justify-center rounded-full font-bold">
                2
              </h2>
              <h1 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
                Boost Conversion Rate
              </h1>
              <p className="text-sm md:text-[17px] text-[#C5C5C5] tracking-tight w-full leading-tight">
                We will fully optimize your website so you will get higher
                conversion rates and gain more clients.
              </p>
            </div>
          </div>
          <div className="pt-5 flex flex-col items-center w-full">
            <div className="border border-neutral-800 p-5 md:p-10 rounded-md w-full">
              <h2 className="text-black bg-yellow-400 mb-3 p-3 sm:p-5 text-base sm:text-xl h-[10px] w-[10px] flex items-center justify-center rounded-full font-bold">
                3
              </h2>
              <h1 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
                On-Brand Design
              </h1>
              <p className="text-sm md:text-[17px] text-[#C5C5C5] tracking-tight w-full leading-tight">
                We will do high quality branding so you win over your
                competition.
              </p>
            </div>
          </div>
          <div className="pt-5 flex flex-col items-center w-full">
            <div className="border border-neutral-800 p-5 md:p-10 rounded-md">
              <h2 className="text-black bg-yellow-400 mb-3 p-3 sm:p-5 text-base sm:text-xl h-[10px] w-[10px] flex items-center justify-center rounded-full font-bold">
                4
              </h2>
              <h1 className="capitalize text-xl md:text-3xl font-bold text-white tracking-tight w-full leading-tight pb-4">
                Get more Sales
              </h1>
              <p className="text-sm md:text-[17px] text-[#C5C5C5] tracking-tight w-full leading-tight">
                We will show your wins to your prospects so you will win their
                trust and their money.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center my-12">
            <Button className="flex justify-center tracking-widest items-center w-full sm:w-fit text-paraMobile uppercase font-semibold">
              book a free call
              <FiArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
