import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vishnudattjangid.com"),
  title: "Vishnu Datt Jangid – Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, Next.js, and Node.js. I build fast, scalable web apps with strong frontend craft and clean design systems.",
  authors: [{ name: "Vishnu Datt Jangid" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.vishnudattjangid.com/",
    siteName: "Vishnu Datt Jangid",
    title: "Vishnu Datt Jangid – Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, and Node.js. Building fast, scalable web apps with strong frontend craft.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Datt Jangid – Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, and Node.js. Building fast, scalable web apps.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226.jpeg",
    shortcut: "https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226.jpeg",
    apple: "https://vj-media.s3.eu-north-1.amazonaws.com/1748215549226.jpeg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
