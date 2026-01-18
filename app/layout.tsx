import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Aahan Sharma | Computer Science Student & Developer",
    description: "Computer Science student specializing in software development and embedded systems. Building web applications, backend systems, and working with Raspberry Pi and LattePanda.",
    keywords: ["Aahan Sharma", "Computer Science", "Software Developer", "Embedded Systems", "Web Development", "React", "Node.js", "Raspberry Pi"],
    authors: [{ name: "Aahan Sharma" }],
    openGraph: {
        title: "Aahan Sharma | Computer Science Student & Developer",
        description: "Computer Science student specializing in software development and embedded systems.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aahan Sharma | Computer Science Student & Developer",
        description: "Computer Science student specializing in software development and embedded systems.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
