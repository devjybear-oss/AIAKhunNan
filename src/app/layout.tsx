import type { Metadata } from "next";
import { Bai_Jamjuree, IBM_Plex_Sans_Thai } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LineFloat from "@/components/LineFloat";
import { IMG } from "@/lib/assets";
import "./globals.css";

const heading = Bai_Jamjuree({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = IBM_Plex_Sans_Thai({
  variable: "--font-lato",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIA Khun Nan | ตัวแทนประกันชีวิต AIA",
  description:
    "คุณ ศศิวิมล อนันทชาติวงศ์ ตัวแทนประกันชีวิตและที่ปรึกษาการเงิน AIA วางแผนประกันสุขภาพและประกันชีวิต",
  icons: {
    icon: IMG.aiaLogo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <LineFloat />
      </body>
    </html>
  );
}
