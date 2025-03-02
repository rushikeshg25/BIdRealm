import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { getAuth } from "@/lib/auth";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BidRealm",
  description: "Bidding and Auctions made Easy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getAuth();

  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen dark:bg-background dark:text-foreground">
              <Navbar
                session={session}
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              />
              <Toaster position="top-center" />
              {children}
            </div>
          </ThemeProvider>{" "}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
