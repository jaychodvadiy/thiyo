import { Inter } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "./comopents/navbar";
import Thiyoherder from "./herder/thiyoherder";
import Footer from "./footer/footer";
import Loging from "./loging/page";
import Page from "./Holidayhomes-hreder/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Thiyoherder />
        {/* <Loging /> */}
        {/* <Page/> */}
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}

