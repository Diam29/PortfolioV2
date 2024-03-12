import { Quicksand } from "next/font/google";
import "./globals.css";
// import Sidebar2 from "./Sidebar2/page";
import Sidebar from "./Sidebar/page";


const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "DV Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Sidebar />
        {/* <Sidebar2 /> */}
        {/* <main className="main__container">{children}</main> */}
        {children}
        </body>
    </html>
  );
}
