import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { SpinningText } from "@/components/magicui/spinning-text";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen overflow-hidden">{children}</main>
            <Toaster richColors />

 <footer className="relative min-h-24 py-16 bg-muted/50 overflow-hidden">
 <SpinningText  duration={6}  className="  absolute top-16 right-20 font-bold h-4 ">AI • Based • Career • Guidance •</SpinningText>
              <div className="container px-4 mx-auto text-center text-gray-200">
                <p className="text-lg font-bold tracking-wider">All rights are reserved  &copy; {new Date().getFullYear()}; </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
