const Footer = () => {
  return (
    <div className="text-white w-full flex flex-col justify-center items-center py-20">
      <div className="w-[80%] border-t border-neutral-800" />

      <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between w-[80%] p-4">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          .sitesculpting
        </span>
        <span className="text-[#c5c5c5]">sitesculpting &copy; 2023</span>
      </div>
    </div>
  );
};

export default Footer;
