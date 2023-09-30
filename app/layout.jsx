import Provider from "@/components/providers/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
