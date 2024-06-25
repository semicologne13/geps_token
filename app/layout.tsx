import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PrelineScript from "@/components/PrelineScript";

const nunito = Poppins({ 
  subsets: ["latin"],
  style: ["normal"],
  weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata: Metadata = {
  title: "GEPS: Green Energy Power Station",
  description: "Green Energy Power Station(GEPS) token is a revolutionary token that fuels the growth of green energy production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
      <PrelineScript/>
    </html>
  );
}
