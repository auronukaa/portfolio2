import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/hooks/store";
import call from "@/app/call.png";
import development from "@/app/designphase.png";
import designphase from "@/app/design.webp";
import launch from "@/app/launch.png";
import Image from "next/image";

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
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {children}
    </div>
  );
};

export const Todo = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="bg-process">
      <Image
        className="absolute inset-0 object-cover h-full w-full rounded-2xl"
        src={launch}
      />
    </FeatureCard>
  );
};

export const Colors = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-300 to-yellow-400">
      <Image
        className="absolute inset-0 object-cover h-full w-full rounded-2xl"
        src={designphase}
      />
    </FeatureCard>
  );
};

export const Availability = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-200 to-yellow-300">
      <Image
        className="absolute inset-0 object-cover h-full w-full rounded-2xl"
        src={development}
      />
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

export const ImgCard = ({ id }) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-200 to-yellow-300">
      <Image
        className="absolute inset-0 object-contain h-full w-full"
        src={call}
      />
    </FeatureCard>
  );
};
