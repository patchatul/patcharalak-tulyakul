import type { Metadata } from "next";
import { Special_Gothic_Expanded_One, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Effects from "./Effects";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const specialGothic = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Patcharalak Tulyakul",
  description: "Personal website of Patcharalak Tulyakul",
  keywords: [
    "Patcharalak",
    "Tulyakul",
    "Patcharalak Tulyakul",
    "Pat",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Patcharalak Tulyakul" }],
  creator: "Patcharalak Tulyakul",
  publisher: "Patcharalak Tulyakul",

  icons: {
    icon: "/Icon3.svg",
    shortcut: "/Icon3.svg",
    apple: "/Icon3.svg",
  },

  openGraph: {
    title: "Patcharalak Tulyakul",
    description: "Personal website of Patcharalak Tulyakul",
    url: "https://patcharalak-tulyakul.vercel.app/", //website link
    siteName: "Patcharalak Tulyakul",
    images: [
      {
        url: "/Icon3.svg",
        width: 800,
        height: 800,
        alt: "Patcharalak Tulyakul",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://patcharalak-tulyakul.vercel.app/") //update deployed link later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${specialGothic.className} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Effects />
        <header>
          <Nav />
        </header>
        {children}
        <footer>
          {/*Contacts*/}
          <div className="flex flex-col items-center p-6 mb-10 border-t">
            <div className="flex flex-row items-center gap-5 sm:gap-15 text-2xl">
              <a href="https://github.com/patchatul">Github</a>
              <a href="https://www.linkedin.com/in/patcharalak-tulyakul/">
                Linkedin
              </a>
              <a href="mailto:patchatulyakul@gmail.com">Gmail</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
