import CameraScroll from '@/components/CameraScroll';
import Menu from '@/components/sections/Menu';
import Experience from '@/components/sections/Experience';
import Gallery from '@/components/sections/Gallery';
import Reservations from '@/components/sections/Reservations';
import Location from '@/components/sections/Location';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-dark">
            {/* Hero scrollytelling */}
            <CameraScroll />

            {/* Content sections */}
            <Menu />
            <Experience />
            <Gallery />
            <Reservations />
            <Location />
            <Faq />
            <Footer />

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-6 right-6 z-50 md:hidden">
                <a
                    href="#reservas"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neon-magenta to-neon-pink rounded-full shadow-glow-magenta animate-glow-pulse cursor-pointer"
                    aria-label="Reservar mesa"
                >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>
        </main>
    );
}
