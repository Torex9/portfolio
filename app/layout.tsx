import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

//fix the correct icons later

export const metadata: Metadata = {
  title: {
    default: "Rufus' Portfolio",
    template: "%s | Rufus' Portfolio",
  },
  description: "Rufus' portfolio",
  icons: {
    icon: "/favicons/favicon-32x32.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#ed5c82",
      },
      {
        rel: "shortcut icon",
        url: "/favicons/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
