import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/hooks/store";
import { motion } from "framer-motion";
import Image from "next/image";
import call from "@/app/calling.png";

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={cn(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br ",
          gradient
        )}
      />
      {children}
    </div>
  );
};

export const Todo = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-200 to-yellow-300">
      <div className="relative">
        <Image src={call} className="absolute left-0 -top-10" />
      </div>
    </FeatureCard>
  );
};

export const Colors = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#89cdfa]">
      <span />
    </FeatureCard>
  );
};

export const Availability = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-200 to-yellow-300">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
