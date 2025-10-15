import { type ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded bg-white/10 px-2 py-0.5 text-xs text-zinc-200 backdrop-blur">
      #{children}
    </span>
  );
}
