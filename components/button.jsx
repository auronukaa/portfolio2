import { cn } from "@/lib/utils";
import Link from "next/link";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-yellow-400 hover:bg-white z-20 transition-all ease-in-out duration-200 px-12 py-3 text-black font-semibold text-base sm:text-lg rounded-full",
        className
      )}
    >
      <Link
        href="https://calendly.com/sitesculpting/30min"
        className="flex items-center"
        target="_blank"
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
