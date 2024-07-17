import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment Recipe Web App",
  description: "A React Django AWS Web App created for a project submission. Uses AWS S3 for front end, CloudFront for CDN and EC2 used for backend.  A custom VPC contains the EC2"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
