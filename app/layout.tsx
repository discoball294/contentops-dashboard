import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "ContentOps - Social Media Content Monitoring",
  description: "Dashboard for monitoring and approving social media content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-dark text-text-primary">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col md:ml-60 pb-20 md:pb-0">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
