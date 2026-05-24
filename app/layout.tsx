import type { Metadata } from "next";
import Link from "next/link";
import PortfolioClientInteractions from "./components/PortfolioClientInteractions";
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
  const navItems = [
    { label: "Work",    href: "/#work" },
    { label: "Writing", href: "/blog" },
    { label: "About",   href: "/#stack" },
    { label: "Résumé",  href: "/resume" },
    { label: "GitHub",  href: "https://github.com/visdutt1234" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PortfolioClientInteractions />
        <nav>
          <div className="wrap nav-in">
            <Link href="/" className="brand">
              <span className="brand-mark">VJ</span>
              Vishnu Jangid
            </Link>
            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="wrap foot-in">
            <span>© 2026 Vishnu Datt Jangid · Engineer by profession, photographer by passion</span>
            <span>build_ref: vj_fe · v2.0</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
