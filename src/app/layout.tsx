import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romina & Nicolás | Nuestra boda",
  description: "Invitación digital de casamiento de Romina y Nicolás.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
