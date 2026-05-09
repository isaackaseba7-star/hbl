import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'HLB Zambia | Trusted Accounting & Advisory Services',
  description: 'Delivering audit, tax, and financial expertise to help your business grow with confidence in Zambia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50" suppressHydrationWarning>{children}</body>
    </html>
  );
}
