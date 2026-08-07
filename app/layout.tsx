import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jack Codet • Portfolio',
  description: 'A modern portfolio for a technical product builder focused on AI, data, and human performance.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen px-6 py-6 sm:px-10 lg:px-14">
          <Navbar />
          <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 pt-8 pb-10 text-slate-100">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
