'use client';

import { motion } from 'framer-motion';

// Placeholder images - in production, replace with real restaurant photos
const galleryItems = [
    { alt: 'Interior del restaurante con luz neón', color: 'from-neon-magenta/20 to-brand-dark' },
    { alt: 'Plato de sashimi con decoración artística', color: 'from-neon-cyan/20 to-brand-dark' },
    { alt: 'Barra de cócteles iluminada', color: 'from-neon-pink/20 to-brand-dark' },
    { alt: 'Mesa con tapas variadas', color: 'from-santorini-blue/20 to-brand-dark' },
    { alt: 'Chef preparando plato en vivo', color: 'from-neon-magenta/20 to-brand-dark' },
    { alt: 'Detalle de postre elegante', color: 'from-neon-cyan/20 to-brand-dark' },
];

export default function Gallery() {
    return (
        <section id="galeria" className="py-24 px-6 bg-brand-dark">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Galería</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Capturas de momentos que solo ocurren aquí.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            {/* Placeholder gradient - replace with actual images */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/40 text-sm">{item.alt}</p>
                                </div>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-neon-magenta/0 group-hover:bg-neon-magenta/20 transition-colors duration-300" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(255,0,255,0.3)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
