"use client";

import { useEffect } from "react";
import renderMathInElement from "katex/contrib/auto-render";

export default function KatexInit() {
  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
      errorColor: "#f87171",
    });
  }, []);

  return null;
}
