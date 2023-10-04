"use client";

import Container from "./container";
import { useAnimate } from "framer-motion";
import { Availability, Colors, Todo, ImgCard } from "./ui/card";
import { OtherVisual } from "./ui/visual";
import { FeatureTitle } from "./ui/title";

const features = [
  {
    title: "Discovery Call",
    id: "discovery-call",
    desc: "20 minute call to get to know your business goals, gather data, & address your pain points.",
    card: ImgCard,
    visual: OtherVisual,
  },
  {
    title: "Design Phase",
    id: "design",
    desc: "Full strategic design / re-design mockup of your landing page with as many revisions as you'd like.",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "Development",
    id: "development",
    desc: "Web development starts after design has been approved and revised to meet your goals.",
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: "Launch & 30 Day Support",
    id: "launch & support",
    desc: "You get your high converting , aesthetic, trust building landing page ( +30 days of free ongoing support ) ",
    card: Todo,
    visual: OtherVisual,
  },
];

const Process = () => {
  const [scope, animate] = useAnimate();

  return (
    <div className="relative pb-40 sm:pb-0">
      <Container>
        <div className="pt-7 sm:pt-20">
          <p className="text-md lg:text-xl text-[#C5C5C5] tracking-tight w-full text-center leading-tight pb-2">
            Our Process
          </p>
          <h1 className="capitalize text-headerMobile sm:text-headerMd2 font-bold text-white tracking-tight w-full text-center leading-tight pb-4">
            How we work
          </h1>
        </div>

        <div ref={scope}>
          {features.map((feature) => (
            <feature.visual id={feature.id} key={feature.id} />
          ))}

          <div className="relative flex flex-col sm:flex-row w-full items-start gap-20">
            <div className="w-full py-[10vh] sm:py-[25vh]">
              <ul>
                {features.map((feature, index) => (
                  <li key={feature.id}>
                    <FeatureTitle id={feature.id}>
                      <span className="text-2xl sm:text-3xl lg:text-5xl">
                        {index + 1}.{" "}
                      </span>
                      {feature.title}
                      <span className="block pt-3 text-base lg:text-xl font-medium">
                        {feature.desc}
                      </span>
                    </FeatureTitle>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fixed bottom-0 left-0 sm:sticky sm:top-0 flex h-screen w-full sm:items-center items-end py-5 pl-14 pr-5">
              <div className="relative aspect-square w-full rounded-2xl sm:bg-gray-500 [&:has(>_.active-card)]:bg-transparent">
                {features.map((feature) => (
                  <feature.card id={feature.id} key={feature.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
