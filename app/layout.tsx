import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import BottomContactSection from '@/components/BottomContactSection';

export const metadata: Metadata = {
  title: 'Springdoo Mattresses',
  description: 'Springdoo mattress collections for better sleep.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          <div className="container">{children}</div>
        </main>
        <BottomContactSection />
      </body>
    </html>
  );
}
