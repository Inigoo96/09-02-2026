'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservations() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '2',
        preferences: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('¡Reserva enviada! Te contactaremos pronto para confirmar.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="reservas" className="py-24 px-6 bg-gradient-to-b from-brand-dark via-brand-midnight to-brand-dark">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Reservar Mesa</h2>
                    <p className="text-white/60 text-lg">
                        Confirmación rápida. Mesa asegurada. Solo queda venir.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    onSubmit={handleSubmit}
                    className="glass p-8 md:p-12 rounded-3xl"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-200"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label htmlFor="date" className="block text-white/80 text-sm font-medium mb-2">
                                Fecha
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-200 [color-scheme:dark]"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label htmlFor="time" className="block text-white/80 text-sm font-medium mb-2">
                                Hora
                            </label>
                            <select
                                id="time"
                                name="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-200 cursor-pointer"
                            >
                                <option value="" className="bg-brand-dark">Seleccionar hora</option>
                                <option value="13:00" className="bg-brand-dark">13:00</option>
                                <option value="13:30" className="bg-brand-dark">13:30</option>
                                <option value="14:00" className="bg-brand-dark">14:00</option>
                                <option value="14:30" className="bg-brand-dark">14:30</option>
                                <option value="20:00" className="bg-brand-dark">20:00</option>
                                <option value="20:30" className="bg-brand-dark">20:30</option>
                                <option value="21:00" className="bg-brand-dark">21:00</option>
                                <option value="21:30" className="bg-brand-dark">21:30</option>
                                <option value="22:00" className="bg-brand-dark">22:00</option>
                            </select>
                        </div>

                        {/* Guests */}
                        <div>
                            <label htmlFor="guests" className="block text-white/80 text-sm font-medium mb-2">
                                Personas
                            </label>
                            <select
                                id="guests"
                                name="guests"
                                required
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-200 cursor-pointer"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                    <option key={n} value={n} className="bg-brand-dark">{n} {n === 1 ? 'persona' : 'personas'}</option>
                                ))}
                                <option value="9+" className="bg-brand-dark">9+ personas (te contactamos)</option>
                            </select>
                        </div>

                        {/* Preferences */}
                        <div className="md:col-span-2">
                            <label htmlFor="preferences" className="block text-white/80 text-sm font-medium mb-2">
                                Alergias o preferencias <span className="text-white/40">(opcional)</span>
                            </label>
                            <textarea
                                id="preferences"
                                name="preferences"
                                value={formData.preferences}
                                onChange={handleChange}
                                placeholder="Cuéntanos si tienes alergias, celebráis algo especial..."
                                rows={3}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-200 resize-none"
                            />
                        </div>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap gap-4 mt-6 text-white/40 text-sm">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Confirmación en 24h
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Cancelación flexible
                        </span>
                    </div>

                    {/* Submit buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            type="submit"
                            className="flex-1 px-8 py-4 bg-gradient-to-r from-neon-magenta to-neon-pink text-white font-semibold rounded-full shadow-glow-magenta hover:shadow-glow-soft transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                        >
                            Confirmar reserva
                        </button>
                        <a
                            href="#ubicacion"
                            className="flex-1 px-8 py-4 glass text-white font-semibold rounded-full text-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            Ver ubicación
                        </a>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
