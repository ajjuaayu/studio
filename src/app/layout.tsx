import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter for body text
import { Creepster } from 'next/font/google';
import './globals.css';
// import './halloween-theme.css'; // Removed this import
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
});

export const metadata: Metadata = {
  title: 'Spooky Greetings',
  description: 'Wish your friends a Happy Halloween with AI-generated greetings!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Apply dark class globally */}
      <body className={`${inter.variable} ${creepster.variable} font-sans antialiased bg-background text-foreground halloween-scroll`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
