'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
    {
        q: '¿Tenéis opciones para alérgenos o dietas especiales?',
        a: 'Sí. Nuestra cocina puede adaptar platos para celíacos, intolerantes a la lactosa, veganos y vegetarianos. Indica tus necesidades al reservar y el equipo preparará alternativas.',
    },
    {
        q: '¿Se pueden hacer reservas para grupos grandes?',
        a: 'Por supuesto. Para grupos de más de 8 personas, te recomendamos contactar directamente por teléfono o WhatsApp. Ofrecemos menús degustación privados.',
    },
    {
        q: '¿Celebráis cumpleaños o eventos especiales?',
        a: 'Sí, nos encanta. Podemos preparar detalles especiales: postre personalizado, decoración en mesa, o incluso reservar un espacio semi-privado. Cuéntanos al hacer la reserva.',
    },
    {
        q: '¿Cuál es la política de cancelación?',
        a: 'Puedes cancelar o modificar tu reserva hasta 24 horas antes sin coste. Para grupos de más de 6 personas pedimos 48 horas de antelación.',
    },
    {
        q: '¿Hay menú infantil?',
        a: 'No tenemos un menú infantil fijo, pero adaptamos porciones y platos más suaves para los pequeños. Habla con nuestro personal al llegar.',
    },
    {
        q: '¿Se puede aparcar cerca?',
        a: 'Sí. Hay parking público en Plaza España (5 min andando). También hay zonas de carga y descarga para dejar pasajeros en la puerta.',
    },
    {
        q: '¿Aceptáis mascotas?',
        a: 'En la terraza sí. En el interior solo perros de asistencia. Avísanos al reservar para asegurarte una mesa adecuada.',
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-gradient-to-b from-brand-dark to-brand-navy">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Preguntas Frecuentes</h2>
                    <p className="text-white/60 text-lg">
                        Todo lo que necesitas saber antes de venir.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="glass rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan cursor-pointer"
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-white font-medium pr-4">{item.q}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-neon-cyan text-2xl flex-shrink-0"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-6 text-white/70">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
