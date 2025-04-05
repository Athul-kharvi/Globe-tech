import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter instead of Poppins

const inter = Inter({ 
  weight: ["300", "400", "500", "600", "700"], // Choose desired font weights
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CNC Machining Specialists",
  description: "Experts in CNC Machining, Heat Treatment, and Cold Forging",
  
  icons: {
    icon: "/logo_cnc.ico", // Default favicon
    shortcut: "/logo_cnc.ico", // Shortcut icon
    apple: "/logo_cn.png", // Apple devices icon
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth w-screen m-0 p-0 ">
      {/* Apply Inter font globally */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
