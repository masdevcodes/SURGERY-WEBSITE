import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: 'Healing Touch - GMC Patiala Surgery',
  description: 'Official website for the Department of Surgery at Government Medical College, Patiala.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Inter:wght@400;700&family=IBM+Plex+Serif:wght@400&family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" style={{ scrollBehavior: 'smooth' }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
