import Image from "next/image";
import type { Shot } from "@/data/projects";

/** Browser-style frame for a dashboard screenshot. Renders an empty slot until `shot.src` is set. */
export default function ShotFrame({
  shot,
  bar,
  sizes = "(max-width: 1023px) 100vw, 56vw",
  priority = false,
}: {
  shot: Shot;
  bar: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className="media media-browser">
      <div className="browser-bar">
        <i /><i /><i />
        <span className="browser-url">{bar}</span>
      </div>
      <div className={`browser-view static${shot.src ? " has-shot" : ""}`}>
        {shot.src ? (
          <Image src={shot.src} alt={shot.caption} fill sizes={sizes} priority={priority} />
        ) : (
          <div className="shot-slot">
            <span className="shot-plus" aria-hidden="true">+</span>
            <span className="shot-cap">{shot.caption}</span>
            <span className="meta dim">Screenshot slot</span>
          </div>
        )}
      </div>
    </div>
  );
}
