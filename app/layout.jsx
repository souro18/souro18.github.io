import Provider from "@/components/providers/ThemeProvider";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header";

const inter = Playfair_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portfolio | Sourajit Paul",
  description: "portfolio of sourajit paul",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="light !scroll-smooth"
      style={{ colorScheme: "light" }}
    >
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
