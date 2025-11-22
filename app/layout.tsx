import type { ReactNode } from "react";

export const metadata = {
  title: "Feel Labs",
  description: "Basic Feel Labs Next.js app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
