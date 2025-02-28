import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
    <div >
      
        {children}
      
    </div>
    </ClerkProvider>
  );
}
