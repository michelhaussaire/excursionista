import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import Footer from "./componentes/footer";
import NavigationBar from "./componentes/navigationbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excursionista",
  description: "Explora, Descubre, Viaja.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          <header className="bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 py-0.5 rounded-md">
            <NavigationBar/> 
          </header> 
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </Providers>
      </body>
    </html>   
  );
}
