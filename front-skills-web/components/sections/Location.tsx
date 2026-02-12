'use client';

import { motion } from 'framer-motion';

export default function Location() {
    return (
        <section id="ubicacion" className="py-24 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Encuéntranos</h2>
                    <p className="text-white/60 text-lg">
                        En el corazón de la ciudad. Cerca de todo, lejos de lo común.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Map placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-3xl overflow-hidden aspect-video md:aspect-square"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-midnight">
                            <div className="text-center">
                                <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-white/40">Mapa interactivo</p>
                                <p className="text-white/20 text-sm mt-1">(Integrar Google Maps)</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Address */}
                        <div className="mb-8">
                            <h3 className="text-neon-cyan text-lg font-semibold mb-2 text-glow-cyan">Dirección</h3>
                            <p className="text-white text-xl">Calle Gran Vía, 42</p>
                            <p className="text-white/60">28013 Madrid, España</p>
                        </div>

                        {/* Hours */}
                        <div className="mb-8">
                            <h3 className="text-neon-cyan text-lg font-semibold mb-2 text-glow-cyan">Horarios</h3>
                            <div className="space-y-1 text-white/80">
                                <p><span className="text-white">Martes - Viernes:</span> 13:00 - 16:00 / 20:00 - 00:00</p>
                                <p><span className="text-white">Sábado:</span> 13:00 - 16:30 / 20:00 - 01:00</p>
                                <p><span className="text-white">Domingo:</span> 13:00 - 17:00</p>
                                <p className="text-white/40">Lunes cerrado</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mb-8">
                            <h3 className="text-neon-cyan text-lg font-semibold mb-2 text-glow-cyan">Contacto</h3>
                            <div className="space-y-2">
                                <a href="tel:+34912345678" className="flex items-center gap-3 text-white hover:text-neon-magenta transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +34 912 345 678
                                </a>
                                <a href="https://wa.me/34912345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-neon-magenta transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* How to get there */}
                        <div className="glass-dark p-4 rounded-xl mb-8">
                            <h4 className="text-white font-medium mb-2">Cómo llegar</h4>
                            <p className="text-white/60 text-sm">
                                Metro: Gran Vía (L1, L5) a 2 min. Parking público en Plaza España.
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href="#reservas"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-brand-dark font-semibold rounded-full shadow-glow-cyan hover:shadow-glow-soft transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                        >
                            Reservar mesa
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
