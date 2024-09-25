import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'; 
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Shady Palms',
    default: 'Shady Palms',
  },
  description: 'Your local stones corner Bar.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black`}>{children}</body>
      </html>
  );
}
