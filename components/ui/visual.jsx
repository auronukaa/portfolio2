import { cn } from "@/lib/utils";

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

export const MusicVisual = ({ id }) => {
  return (
    <Visual id={id}>
      <img src="https://www.frontend.fyi/playground-assets/amie/window-spotify.webp" />
    </Visual>
  );
};

export const OtherVisual = ({ id }) => {
  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" />
    </Visual>
  );
};
