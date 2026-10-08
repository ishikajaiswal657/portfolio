import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ishika Jaiswal | Portfolio',
  description:
    'Portfolio of Ishika Jaiswal - developer and cybersecurity student building secure, data-driven tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip min-h-screen">
        {children}
      </body>
    </html>
  );
}
