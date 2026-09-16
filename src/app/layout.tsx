import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding SaaS | Sofía & Tomás",
  description: "Una invitación digital de casamiento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
