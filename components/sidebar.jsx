"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Button from "./button";

const links = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Offer",
  },
  {
    id: 3,
    title: "Process",
  },
];

const Sidebar = () => {
  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <HiOutlineMenuAlt3 size={25} />
        </SheetTrigger>
        <SheetContent side="top">
          <div className="grid grid-cols-1 gap-y-5 my-10 h-full">
            <div className="flex flex-col gap-y-5">
              {links.map((item) => {
                return (
                  <SheetClose asChild key={item.id}>
                    <Link
                      href="/"
                      className="text-2xl font-medium transition-colors hover:text-black"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
            <div className="flex items-center justify-end pb-10 flex-col">
              <Button className="w-full outline-none focus:outline-none">
                Book a Call
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
