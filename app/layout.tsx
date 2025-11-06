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
      <body>
        <Silk speed={5} scale={1.5} color="#1D4E6B" noiseIntensity={1.2} rotation={0} />
        {children}
      </body>
    </html>
  );
}
