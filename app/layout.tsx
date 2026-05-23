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
    { label: "Stack", href: "/#stack" },
    { label: "Work", href: "/#work" },
    { label: "Projects", href: "/#projects" },
    { label: "Blogs", href: "/blog" },
    { label: "Education", href: "/#edu" },
    { label: "Contact", href: "/#contact" },
    { label: "GitHub", href: "https://github.com/visdutt1234" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <html lang="en">
      <body>
        <div className="bg-grid" />
        <PortfolioClientInteractions />
        <nav>
          <div className="wrap nav-in">
            <Link href="/" className="brand">
              <span className="dot" />
              VISHNU_JANGID//SWE
            </Link>
            <button className="menu-btn" id="menuBtn">
              MENU_
            </button>
            <div className="nav-links" id="navLinks">
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
            <span>
              Vishnu Datt Jangid © 2026 // <span className="acc">Software Engineer</span>
            </span>
            <span>
              Engineer by profession - <span className="acc">photographer by passion</span>
            </span>
            <span>BUILD_REF: VJ_FE</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
