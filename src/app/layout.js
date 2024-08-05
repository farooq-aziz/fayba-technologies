//===== Import Fonts =====
import { primary } from "./configs/fonts";
//===== Import Components =====
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scripts from "./Scripts";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  //===== Title & Descriptions =====
  title: "FAYBA Technologies",
  description: "",
  //===== Canonical =====
  alternates: { canonical: '' },
  //===== OG Metas =====
  openGraph: {
    title: "",
    description: "",
    url: '',
    siteName: '',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body className={primary.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
