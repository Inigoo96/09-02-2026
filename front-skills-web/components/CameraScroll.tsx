'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OverlayContent {
    range: [number, number];
    heading?: string;
    subheading?: string;
    message?: string;
    microcopy?: string;
    cta?: { primary?: { label: string; href: string }; secondary?: { label: string; href: string } };
}

const overlays: OverlayContent[] = [
    {
        range: [0, 0.15],
        heading: 'SEDA & OLIVO',
        subheading: 'Donde el Sol se encuentra con el Dragón.',
        cta: { secondary: { label: 'Explorar menú', href: '#menu' } },
    },
    {
        range: [0.25, 0.45],
        message: 'Tapas para compartir. Técnica japonesa. Alma mediterránea.',
        microcopy: 'Sabores limpios, contrastes precisos, ambiente eléctrico.',
    },
    {
        range: [0.55, 0.75],
        message: 'De cita a celebración: un lugar para venir con ganas.',
        microcopy: 'Cócteles, luz azul, neón magenta y platos firma.',
    },
    {
        range: [0.85, 1],
        cta: {
            primary: { label: 'Reservar mesa', href: '#reservas' },
            secondary: { label: 'Ver carta', href: '#menu' },
        },
    },
];

export default function CameraScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameIndexRef = useRef(0);
    const rafRef = useRef<number>(0);

    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Load images from manifest
    useEffect(() => {
        const loadFrames = async () => {
            try {
                const res = await fetch('/frames/manifest.json');
                if (!res.ok) {
                    throw new Error('Falta generar manifest de frames. Ejecuta npm run predev o npm run prebuild.');
                }

                const framePaths: string[] = await res.json();
                if (framePaths.length === 0) {
                    throw new Error('No hay frames en el manifest.');
                }

                const images: HTMLImageElement[] = [];
                let loaded = 0;

                await Promise.all(
                    framePaths.map((path, index) => {
                        return new Promise<void>((resolve, reject) => {
                            const img = new Image();
                            img.onload = () => {
                                images[index] = img;
                                loaded++;
                                setLoadProgress(Math.round((loaded / framePaths.length) * 100));
                                resolve();
                            };
                            img.onerror = () => reject(new Error(`Error cargando: ${path}`));
                            img.src = path;
                        });
                    })
                );

                imagesRef.current = images;
                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
                setIsLoading(false);
            }
        };

        loadFrames();
    }, []);

    // Draw frame on canvas
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = imagesRef.current[index];

        if (!canvas || !ctx || !img) return;

        // Get device pixel ratio with mobile cap
        const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 2 : 3);

        // Set canvas size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        // Clear canvas
        ctx.fillStyle = '#0A0A1A';
        ctx.fillRect(0, 0, rect.width, rect.height);

        // Calculate "contain" dimensions
        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawWidth = rect.width;
            drawHeight = rect.width / imgRatio;
            offsetX = 0;
            offsetY = (rect.height - drawHeight) / 2;
        } else {
            drawHeight = rect.height;
            drawWidth = rect.height * imgRatio;
            offsetX = (rect.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    // Handle scroll with requestAnimationFrame
    useEffect(() => {
        if (isLoading || error || imagesRef.current.length === 0) return;

        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current;
                if (!container) return;

                const rect = container.getBoundingClientRect();
                const scrollTop = -rect.top;
                const scrollHeight = container.offsetHeight - window.innerHeight;
                const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

                setScrollProgress(progress);

                const totalFrames = imagesRef.current.length;
                const newIndex = Math.min(Math.floor(progress * totalFrames), totalFrames - 1);

                if (newIndex !== frameIndexRef.current) {
                    frameIndexRef.current = newIndex;
                    drawFrame(newIndex);
                }
            });
        };

        // Initial draw
        drawFrame(0);

        // Add passive scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', () => drawFrame(frameIndexRef.current), { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => drawFrame(frameIndexRef.current));
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [isLoading, error, drawFrame]);

    // Smooth scroll to section
    const scrollTo = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Get active overlay based on scroll progress
    const getActiveOverlay = () => {
        return overlays.find(o => scrollProgress >= o.range[0] && scrollProgress <= o.range[1]);
    };

    const activeOverlay = getActiveOverlay();

    // Loading screen
    if (isLoading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-brand-dark">
                <div className="relative w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadProgress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
                <p className="mt-4 text-white/60 text-sm font-medium">{loadProgress}%</p>
                <p className="mt-2 text-white/40 text-xs">Cargando experiencia...</p>
            </div>
        );
    }

    // Error screen
    if (error) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-brand-dark p-8">
                <div className="glass p-8 rounded-2xl max-w-md text-center">
                    <p className="text-neon-magenta text-lg font-semibold mb-2">⚠️ Error</p>
                    <p className="text-white/80">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
            {/* Sticky canvas container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                />

                {/* Overlay content */}
                <AnimatePresence mode="wait">
                    {activeOverlay && (
                        <motion.div
                            key={`overlay-${activeOverlay.range[0]}`}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10"
                        >
                            {activeOverlay.heading && (
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 gradient-text">
                                    {activeOverlay.heading}
                                </h1>
                            )}

                            {activeOverlay.subheading && (
                                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
                                    {activeOverlay.subheading}
                                </p>
                            )}

                            {activeOverlay.message && (
                                <p className="text-2xl md:text-4xl font-semibold text-white mb-4 max-w-3xl text-glow-cyan">
                                    {activeOverlay.message}
                                </p>
                            )}

                            {activeOverlay.microcopy && (
                                <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                                    {activeOverlay.microcopy}
                                </p>
                            )}

                            {activeOverlay.cta && (
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    {activeOverlay.cta.primary && (
                                        <button
                                            onClick={() => scrollTo(activeOverlay.cta!.primary!.href)}
                                            className="px-8 py-4 bg-gradient-to-r from-neon-magenta to-neon-pink text-white font-semibold rounded-full shadow-glow-magenta hover:shadow-glow-soft transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                        >
                                            {activeOverlay.cta.primary.label}
                                        </button>
                                    )}

                                    {activeOverlay.cta.secondary && (
                                        <button
                                            onClick={() => scrollTo(activeOverlay.cta!.secondary!.href)}
                                            className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                        >
                                            {activeOverlay.cta.secondary.label}
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll indicator */}
                {scrollProgress < 0.1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-white/40 text-sm">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                        >
                            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
