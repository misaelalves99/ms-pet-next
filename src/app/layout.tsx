// app/layout.tsx
import type { Metadata } from "next";
import { AuthProvider } from "../app/context/AuthContext";
import "../app/globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Adote um Pet",
  description: "Plataforma para adoção de pets amorosos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
