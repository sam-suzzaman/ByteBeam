import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Byte Beam || Official website",
    description: "Enhance knowledge one  byte more",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <div className="main_wrapper">
                    <Navbar />
                    <div className="byte_container">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
