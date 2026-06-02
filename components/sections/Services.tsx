'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { TextReveal } from '@/components/ui/TextReveal';
import { Marquee } from '@/components/ui/Marquee';

const services = [
    {
        number: '01',
        title: 'Full-Stack Development',
        description: 'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
        skills: ['React, Node.js, Express.js', 'REST APIs, Firebase, Docker', 'Git, GitHub, Postman']
    },
    {
        number: '02',
        title: 'UI/UX & Frontend',
        description: 'Design is more than looks — it\'s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive and deliver a great user experience.',
        skills: ['HTML, CSS, JavaScript', 'React, Tailwind CSS', 'Responsive Design, Accessibility']
    },
    {
        number: '03',
        title: 'Embedded Systems',
        description: 'Building software that interacts with hardware. I work with Raspberry Pi, LattePanda, and other embedded boards to create IoT solutions and hardware-integrated applications.',
        skills: ['Raspberry Pi, LattePanda', 'Embedded Linux, Python', 'Sensor Integration, GPIO']
    },
    {
        number: '04',
        title: 'Management & Marketing',
        description: 'Beyond coding, I bring organizational and promotional skills to the table. I manage projects effectively and leverage digital marketing strategies to increase reach and engagement.',
        skills: ['Project Management, Agile', 'Digital Marketing, SEO', 'Social Media Management']
    }
];

export default function Services() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} id="services" className="min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background Marquee */}
            <div className="absolute top-0 left-0 right-0 mt-20">
                <Marquee text="AAHAN SHARMA" className="w-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                <div className="mb-20">
                    <TextReveal className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                        WHAT I DO /
                    </TextReveal>

                    <div className="flex flex-col md:flex-row md:items-start gap-8 mt-12">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 shrink-0">(SERVICES)</p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
                        >
                            I specialize in building full-stack web applications that are fast, reliable, and user-friendly.
                            With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether
                            it&apos;s for a business, a startup, or a product team.
                        </motion.p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="group"
                        >
                            <div className="border-l-2 border-white/20 pl-8 hover:border-white/60 transition-colors duration-500">
                                {/* Number */}
                                <div className="overflow-hidden mb-6">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                                    >
                                        <span className="text-6xl md:text-7xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-500">
                                            ({service.number})
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Skills */}
                                <div className="space-y-2">
                                    {service.skills.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="text-xs text-gray-600">0{idx + 1}</span>
                                            <span className="text-sm text-gray-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
