import { cn } from "@/lib/utils";
import call from "@/app/call.png";
import Image from "next/image";

const Visual = ({ children, id }) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}
    >
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const OtherVisual = ({ id }) => {
  return (
    <Visual id={id}>
      <Image src={call} />
    </Visual>
  );
};
