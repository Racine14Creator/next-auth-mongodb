import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth with MongoDB",
  description: "Racine14 Creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
