import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'El Santo Cocina Mexicana | Premium Experience',
  description: 'Restaurante mexicano de experiência premium em São José do Rio Preto. Gastronomia artesanal, ambiente sofisticado e autêntica cozinha contemporânea.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased overflow-x-hidden selection:bg-brand-terracotta selection:text-brand-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
