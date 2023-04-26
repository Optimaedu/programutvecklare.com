import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth scrollbar scrollbar-w-[6px] scrollbar-h-[6px] scrollbar-thumb-[#1d2b69] scrollbar-track-[#0c1024]"
    >
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <title>Optima - Programutvecklare</title>
      <Head />
      <body className="bg-[#0c1024] text-[#ffffe6de] font-montserrat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
