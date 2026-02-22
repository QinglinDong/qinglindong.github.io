import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Qinglin Dong",
    template: "%s | Qinglin Dong",
  },
  description: "Thoughts on AI agents, evaluation, and building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-border">
            <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
              >
                Qinglin Dong
              </Link>
              <div className="flex gap-6 text-sm text-muted">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Writing
                </Link>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
            {children}
          </main>

          <footer className="border-t border-border">
            <div className="max-w-2xl mx-auto px-6 py-6 text-sm text-muted">
              <p>&copy; {new Date().getFullYear()} Qinglin Dong</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
