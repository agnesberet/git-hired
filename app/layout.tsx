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
    title: "git hired",
    description: "Find your next dev role",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <nav className="border-b px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight">
                git hired
            </Link>
            <div className="flex items-center gap-6">
                <Link
                    href="/jobs"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Jobs
                </Link>
                <Link
                    href="/profile"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Profile
                </Link>
            </div>
        </nav>

        {children}
        </body>
        </html>
    );
}