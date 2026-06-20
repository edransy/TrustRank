declare module "katex/contrib/auto-render" {
  interface RenderOptions {
    delimiters?: Array<{
      left: string;
      right: string;
      display: boolean;
    }>;
    throwOnError?: boolean;
    errorColor?: string;
  }

  export default function renderMathInElement(
    element: HTMLElement,
    options?: RenderOptions
  ): void;
}
