import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "@/hooks/store";
import { cn } from "@/lib/utils";

export const FeatureTitle = ({ children, id, document }) => {
  const ref = useRef(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    root: documentRef,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <span
      ref={ref}
      className={cn(
        "py-16 sm:py-32 font-heading text-2xl text-left sm:text-5xl transition-colors block font-bold tracking-tight px-5",
        isInView ? "text-white" : "text-neutral-500"
      )}
    >
      {children}
    </span>
  );
};
