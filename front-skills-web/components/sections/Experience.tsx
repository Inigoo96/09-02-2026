'use client';

import { motion } from 'framer-motion';

const pillars = [
    {
        title: 'Fusión con Propósito',
        desc: 'No mezclamos por mezclar. Cada combinación tiene sentido: técnica japonesa que realza producto mediterráneo.',
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" stroke="url(#grad1)" strokeWidth="2" />
                <path d="M16 24h16M24 16v16" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFFF" />
                        <stop offset="100%" stopColor="#FF00FF" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        title: 'Ambiente Inmersivo',
        desc: 'Luz que cambia con la noche. Neón suave, madera cálida, música que envuelve sin interrumpir.',
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="8" fill="url(#grad2)" />
                <circle cx="24" cy="24" r="16" stroke="url(#grad2)" strokeWidth="2" opacity="0.5" />
                <circle cx="24" cy="24" r="20" stroke="url(#grad2)" strokeWidth="1" opacity="0.3" />
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF00FF" />
                        <stop offset="100%" stopColor="#00FFFF" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        title: 'Platos para Compartir',
        desc: 'La mesa como centro social. Tapas, bentos a medias, postres que roban todos. Ven con ganas de probar.',
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                <path d="M12 32a12 12 0 0124 0" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="20" r="4" stroke="url(#grad3)" strokeWidth="2" />
                <circle cx="30" cy="20" r="4" stroke="url(#grad3)" strokeWidth="2" />
                <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFFF" />
                        <stop offset="100%" stopColor="#FF00FF" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
];

export default function Experience() {
    return (
        <section id="experiencia" className="py-24 px-6 bg-gradient-to-b from-brand-dark via-brand-navy to-brand-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tokio de noche <span className="gradient-text">+</span> Santorini al atardecer
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Una experiencia que trasciende la comida. Cada detalle diseñado para que el tiempo se detenga.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="glass p-8 rounded-3xl text-center group hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                        >
                            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                            <p className="text-white/60">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
