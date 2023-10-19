import { FiArrowRight } from "react-icons/fi";
import Button from "./button";

const Footer = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center pb-10 px-4 pt-20 relative">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h2 className="text-headerMobile sm:text-headerMd lg:text-header font-extrabold text-black tracking-[-0.04em] px-0 sm:tracking-tight w-full text-center leading-[1.1] mb-3">
          Book A FREE Call
        </h2>
        <p className="text-paraMobile sm:text-para max-w-[600px] text-center leading-5 sm:leading-6 font-normal text-[#0f1011] px-2 mb-8">
          I offer different packages, so I&apos;ll need to learn about your
          specific situation before we move forward.
        </p>
        <Button className="flex justify-center tracking-tight items-center w-[90%] sm:w-fit text-paraMobile uppercase font-bold bg-yellow-400 border-2 text-[#0f1011] border-[#0f1011] hover:bg-[#0f1011] hover:text-white">
          book a free call
          <FiArrowRight size={20} className="ml-2" />
        </Button>
      </div>
      <div className="image-backgrounds2 absolute inset-0" />
      {/* <div className="w-full sm:w-[80%] border-t border-neutral-800" /> */}
      <div className="max-w-7xl px-2 sm:px-4 w-full pt-32 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-y-1 items-center justify-between py-4 w-[80%]">
          <span className="text-2xl font-bold tracking-tight text-black">
            .sitesculpting
          </span>
          <span className="text-neutral-700 text-sm md:text-base font-medium">
            sitesculpting &copy; 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
