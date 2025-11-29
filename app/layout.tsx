import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schema Pilot - Visual Database Design",
  description: "Design your database visually, generate Prisma & SQL code instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} antialiased`}
        >
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
