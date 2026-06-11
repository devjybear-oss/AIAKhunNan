import type { Metadata } from "next";
import { Lato, Prompt } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AIA Khun Nan | ตัวแทนประกันชีวิต AIA",
  description:
    "คุณ ศศิวิมล อนันทชาติวงศ์ ตัวแทนประกันชีวิตและที่ปรึกษาการเงิน AIA วางแผนประกันสุขภาพและประกันชีวิต",
  icons: {
    icon: "https://aiaplanner.com/wp-content/uploads/2023/05/Logo-Fav-150x150.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} ${lato.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
