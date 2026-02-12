import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Seda & Olivo | Cocina Fusión Mediterránea-Japonesa',
    description: 'Donde el Sol se encuentra con el Dragón. Experiencia gastronómica única fusionando la tradición mediterránea con la precisión japonesa.',
    keywords: 'restaurante, fusión, japonés, mediterráneo, tapas, reservas, Madrid',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
