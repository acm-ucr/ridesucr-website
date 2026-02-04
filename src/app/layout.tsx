import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "../components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--bebas-neue-font",
});

export const metadata = {
  title: "RidesUCR Website",
  description:
    "Rides@UCR is a car club & social organization that unites all those interested in the modification and passion for vehicles and driving.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className} bg-black`}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
