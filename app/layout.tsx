import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Optimize font loading
  preload: true
});

export const metadata: Metadata = {
  title: 'Beyond the LowerLift: Cadaver Lab 2025',
  description: 'Uma experiência imersiva e exclusiva de aprendizado em anatomia cirúrgica com abordagem em cadáver. Apenas 6 vagas disponíveis.',
  keywords: 'cadaver lab, cirurgia, anatomia, treinamento médico, lowerlift',
  openGraph: {
    title: 'Beyond the LowerLift: Cadaver Lab 2025',
    description: 'Uma experiência imersiva e exclusiva de aprendizado em anatomia cirúrgica com abordagem em cadáver.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond the LowerLift: Cadaver Lab 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond the LowerLift: Cadaver Lab 2025',
    description: 'Uma experiência imersiva e exclusiva de aprendizado em anatomia cirúrgica com abordagem em cadáver.',
    images: ['/assets/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://beyondthelowerlift.com'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/assets/images/logo.png" as="image" />
        <link rel="preload" href="/assets/images/bg.jpg" as="image" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}