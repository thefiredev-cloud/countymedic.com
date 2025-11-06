import type { Metadata } from "next";
import "./globals.css";
import SilkBackground from "./components/SilkBackground";

export const metadata: Metadata = {
  title: "County Medic - Decision Support for Paramedics",
  description: "Advanced AI assistant designed for LA County Fire Department paramedics - bringing protocol expertise and medication dosing directly to the field.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gradient-bg">
        <SilkBackground />
        {children}
      </body>
    </html>
  );
}
