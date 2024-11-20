import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Nav } from "@/components/layout/navNew";
import { Footer } from "@/components/layout/footer";
import TextMarquee from "@/components/ui/TextMarquee";
import { herrVon, inter, playfairBold, playfairThin } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - insta",
  // description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`${playfairBold.variable} ${playfairThin.variable} ${inter.variable} ${herrVon.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <div className="top-0 z-50">
              <Nav />
            </div>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}