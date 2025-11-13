import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - County Medic",
  description: "County Medic Privacy Policy. Learn how we collect, use, and protect your information with HIPAA-compliant data handling.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
