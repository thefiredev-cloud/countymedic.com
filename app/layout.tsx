import type { Metadata, Viewport } from "next";
import "./globals.css";
import NoiseOverlay from "./components/NoiseOverlay";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL('https://countymedic.com'),
  title: "County Medic - Enterprise Clinical Decision Support for Fire Department EMS",
  description: "HIPAA-compliant clinical decision support system for fire department paramedics. SOC 2 Type II certified. Integrated with ImageTrend, ESO, and NEMSIS 3.5. Trusted by California fire departments.",
  openGraph: {
    title: "County Medic - Enterprise Clinical Decision Support for Fire Department EMS",
    description: "HIPAA-compliant clinical decision support system for fire department paramedics. SOC 2 Type II certified. Integrated with ImageTrend, ESO, and NEMSIS 3.5. Trusted by California fire departments.",
    type: "website",
    url: "https://countymedic.com",
    siteName: "County Medic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "County Medic - Enterprise Clinical Decision Support for Fire Department EMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "County Medic - Enterprise Clinical Decision Support for Fire Department EMS",
    description: "HIPAA-compliant clinical decision support system for fire department paramedics. SOC 2 Type II certified. Integrated with ImageTrend, ESO, and NEMSIS 3.5. Trusted by California fire departments.",
    images: ["/twitter-image.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gradient-bg">
        <ScrollProgress />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
