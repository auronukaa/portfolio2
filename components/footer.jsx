const Footer = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center pb-10 px-4 pt-20">
      <div className="w-full sm:w-[80%] border-t border-neutral-800" />

      <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between w-full sm:w-[80%] py-4">
        <span className="text-xl font-bold tracking-tight text-white">
          .sitesculpting
        </span>
        <span className="text-[#c5c5c5] text-sm md:text-base">
          sitesculpting &copy; 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
