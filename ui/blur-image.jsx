"use client"

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ ...props }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt || "Image Text"}
      className={clsx(
        props.className,
        "duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}