// app/layout.tsx
import type { Metadata } from "next";
import { AuthProvider } from "../app/context/AuthContext";
import "../app/globals.css"; // Importação dos estilos globais
import Navbar from "../app/components/Navbar"; // Importando a Navbar

export const metadata: Metadata = {
  title: "Adote um Pet",
  description: "Plataforma para adoção de pets amorosos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <Navbar /> {/* Adicionando a Navbar aqui */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
