import KatexInit from "./components/KatexInit";
import { getWhitepaperBodyHtml } from "../lib/whitepaper";

export default function Home() {
  const bodyHtml = getWhitepaperBodyHtml();

  return (
    <>
      <KatexInit />
      <div
        className="whitepaper"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </>
  );
}
