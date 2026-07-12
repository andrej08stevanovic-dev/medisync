import type { ComponentType, SVGProps } from "react";

/**
 * Line-art icons in the lucide visual style (24px grid, 2px stroke,
 * `currentColor`) for specialties lucide-react doesn't cover. They are used as
 * the large hero motif and gallery glyphs, so they must read cleanly at big
 * sizes with a thin stroke — same look as the tooth in the reference design.
 */
export type DemoIcon = ComponentType<SVGProps<SVGSVGElement>>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Tooth: DemoIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7.4 2.4C5 2.4 3.2 4.4 3.2 7.2c0 1.5.4 2.5.9 4 .3 1 .5 2.3.7 3.7.2 1.6.4 3.2.9 4.4.3.8.8 1.2 1.4 1.2.9 0 1.1-1 1.3-2.2.2-1.3.3-2.6 1.1-2.6s.9 1.3 1.1 2.6c.2 1.2.4 2.2 1.3 2.2.6 0 1.1-.4 1.4-1.2.5-1.2.7-2.8.9-4.4.2-1.4.4-2.7.7-3.7.5-1.5.9-2.5.9-4 0-2.8-1.8-4.8-4.2-4.8-1.5 0-2.6.7-3.3 1.3-.4.3-.9.3-1.3 0-.7-.6-1.8-1.3-3.3-1.3Z" />
  </svg>
);

export const Nail: DemoIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M8.2 10.6c0-3.6.4-7.4 3.8-7.4s3.8 3.8 3.8 7.4c0 1.3-.2 2.4-.5 3.3" />
    <path d="M7.7 13.4c.3 3 .9 6.4 4.3 6.4s4-3.4 4.3-6.4" />
    <path d="M7.6 12.2c1.3-.9 2.8-1.3 4.4-1.3s3.1.4 4.4 1.3" />
  </svg>
);

export const Brow: DemoIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 9.5c2.6-2.2 5.5-3.3 8.7-3.3 3.2 0 6.1 1.1 8.3 3.3" />
    <path d="M4.5 13.8c2.2-1.6 4.7-2.4 7.4-2.4 2.7 0 5.2.8 7.6 2.4" />
  </svg>
);

export const Massage: DemoIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="6" r="2.4" />
    <path d="M3 15.5c2.4-1.4 4.4-2.1 6-2.1 2.4 0 3.3 1.6 6 1.6 1.6 0 3.4-.6 6-1.9" />
    <path d="M3 19.5c2.4-1.4 4.4-2.1 6-2.1 2.4 0 3.3 1.6 6 1.6 1.6 0 3.4-.6 6-1.9" />
  </svg>
);
