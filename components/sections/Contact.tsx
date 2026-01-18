'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TextReveal } from '@/components/ui/TextReveal';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const links = [
        {
            name: 'Email',
            value: 'aahansharma989@gmail.com',
            href: 'mailto:aahansharma989@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            value: 'github.com/AahanDoesGit',
            href: 'https://github.com/AahanDoesGit',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'Twitter / X',
            value: '@SaekoWht',
            href: 'https://x.com/SaekoWht',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-zinc-950">
            <div className="max-w-4xl w-full" ref={ref}>
                {/* Section Title */}
                <div className="mb-16 text-center">
                    <TextReveal className="text-5xl md:text-7xl font-bold mb-8 justify-center flex">
                        CONTACT /
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Get in touch for opportunities or just to say hi.
                    </motion.p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="group flex flex-col items-center justify-center p-8 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 mb-6">
                                {link.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{link.name}</h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {link.value}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
