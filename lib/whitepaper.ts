import fs from "fs";
import path from "path";

export function getWhitepaperBodyHtml(): string {
  const htmlPath = path.join(
    process.cwd(),
    "content",
    "trustrank_whitepaper.html"
  );
  const html = fs.readFileSync(htmlPath, "utf8");

  const start = html.indexOf('<div class="page-header">');
  const scriptStart = html.indexOf("<script>");
  if (start === -1 || scriptStart === -1) {
    throw new Error("Could not extract whitepaper body from HTML source");
  }

  return html.slice(start, scriptStart).trim();
}
