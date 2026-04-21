import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Infant, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Consult Dr B | Precision Medicine & Personalised Care",
    template: "%s | Consult Dr B",
  },
  description:
    "World-class medical consulting, personalised programs, nutrition, peptide therapy, and coaching — led by Dr B.",
  keywords: ["medical consulting", "peptide therapy", "nutrition", "health coaching", "precision medicine"],
  openGraph: {
    title: "Consult Dr B",
    description: "Precision Medicine. Personalised Care.",
    type: "website",
  },
  icons: {
    icon: "/logo3.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${poppins.variable}`}>
      <body className="bg-white text-gray-900 font-body antialiased">
        <Header />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}