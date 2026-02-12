'use client';

import { motion } from 'framer-motion';

const menuCategories = [
    {
        name: 'Tapas Fusión',
        items: [
            { name: 'Tataki de Atún con Alioli de Yuzu', desc: 'Corte fresco, cítricos vibrantes, toque de ajo suave' },
            { name: 'Gyozas de Rabo de Toro', desc: 'Estofado lento, masa crujiente, salsa de vino' },
            { name: 'Pulpo a la Brasa con Miso Blanco', desc: 'Carbón, umami profundo, aceite de pimentón' },
        ],
    },
    {
        name: 'Bento Mediterráneo',
        items: [
            { name: 'Bento del Mar', desc: 'Lubina al vapor, verduras de temporada, arroz negro' },
            { name: 'Bento Tierra Adentro', desc: 'Secreto ibérico, setas shiitake, patata trufada' },
        ],
    },
    {
        name: 'Cócteles & Maridajes',
        items: [
            { name: 'Negroni Sakura', desc: 'Gin japonés, Campari, vermut rosado, flor de cerezo' },
            { name: 'Sangría de Shiso', desc: 'Tempranillo, menta japonesa, cítricos, especias' },
        ],
    },
    {
        name: 'Postres con Giro',
        items: [
            { name: 'Tarta de Queso con Miso Caramelizado', desc: 'Cremosa, salada, dulce final' },
            { name: 'Mochi de Aceite de Oliva', desc: 'Textura elástica, notas herbáceas, helado de vainilla' },
        ],
    },
];

const signatureDishes = [
    { name: 'Tartar de Wagyu Mediterráneo', desc: 'Alcaparras, tomate seco, yema curada, polvo de alga' },
    { name: 'Robata de Vieiras con Jamón Ibérico', desc: 'Brasa suave, grasa fundida, caldo dashi' },
    { name: 'Nigiri Omakase', desc: 'Selección del chef: pescados del día, técnica edomae' },
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Nuestra Carta</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Platos que cuentan historias: del Mediterráneo a Tokio, en cada bocado.
                    </p>
                </motion.div>

                {/* Signature Dishes */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold text-neon-magenta mb-8 text-center text-glow-magenta">
                        ✦ Platos Firma ✦
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {signatureDishes.map((dish, i) => (
                            <div
                                key={i}
                                className="glass p-6 rounded-2xl border border-neon-magenta/30 hover:border-neon-magenta/60 transition-colors duration-300 cursor-pointer"
                            >
                                <h4 className="text-xl font-semibold text-white mb-2">{dish.name}</h4>
                                <p className="text-white/60">{dish.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Menu Categories */}
                <div className="grid md:grid-cols-2 gap-12">
                    {menuCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-semibold text-neon-cyan mb-6 text-glow-cyan">
                                {category.name}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="glass-dark p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                                    >
                                        <h4 className="text-lg font-medium text-white">{item.name}</h4>
                                        <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#reservas"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-brand-dark font-semibold rounded-full shadow-glow-cyan hover:shadow-glow-soft transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        Reservar mesa
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
