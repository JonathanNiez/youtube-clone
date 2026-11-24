import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyTube",
  description: "Project by JonathanNiez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
