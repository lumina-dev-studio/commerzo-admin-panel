import type {Metadata} from "next";
import {Inter} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Providers from "@/Providers/Providers";
import {Toaster} from "@/components/ui/sonner";

// Load Inter font from Google Fonts
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

// Load local fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <Providers>
            <html lang="en">
            <body
                className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200/80`}
            >
            <main>{children}</main>
            <Toaster/>
            </body>
            </html>
        </Providers>
    );
}
