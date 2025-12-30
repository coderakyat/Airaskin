import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Users, Sparkles, Heart, Target, Eye } from 'lucide-react';

export default function AboutSection() {
    const stats = [
        { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
        { value: 1000, suffix: '+', label: 'Pasien Puas' },
        { value: 15, suffix: '+', label: 'Layanan Premium' },
        { value: 98, suffix: '%', label: 'Tingkat Kepuasan' }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Peduli & Empati',
            description: 'Kami memahami setiap kebutuhan dan kekhawatiran Anda tentang perawatan kulit'
        },
        {
            icon: Award,
            title: 'Profesional',
            description: 'Tim dokter bersertifikat dan terlatih dengan standar medis tertinggi'
        },
        {
            icon: Sparkles,
            title: 'Inovasi',
            description: 'Menggunakan teknologi dan metode treatment terkini untuk hasil optimal'
        },
        {
            icon: Users,
            title: 'Kepercayaan',
            description: 'Membangun hubungan jangka panjang dengan setiap klien kami'
        }
    ];

    return (
        <div>
            {/* Header Section */}
            <section className="bg-secondary/30 py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                            Tentang <span className="text-primary">AIRA Skin Clinic</span>
                        </h2>
                        <p className="text-xl text-dark/80 leading-relaxed">
                            Perjalanan kami dimulai dari passion untuk membantu setiap orang menemukan kecantikan alami mereka
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm text-primary-dark font-medium">Cerita Kami</span>
                            </div>

                            <h3 className="text-4xl font-bold text-dark leading-tight">
                                Membangun Kepercayaan Melalui Keahlian & Dedikasi
                            </h3>

                            <p className="text-dark/70 leading-relaxed">
                                AIRA Skin Clinic didirikan pada tahun 2019 dengan visi untuk menghadirkan solusi perawatan kulit yang holistik dan profesional. Kami percaya bahwa setiap orang berhak mendapatkan kulit sehat dan kepercayaan diri yang maksimal.
                            </p>

                            <p className="text-dark/70 leading-relaxed">
                                Dengan tim dokter spesialis kulit yang berpengalaman dan teknologi terkini, kami telah membantu ribuan klien mencapai kulit impian mereka. Setiap treatment dirancang khusus sesuai dengan kebutuhan unik kulit Anda.
                            </p>

                            <p className="text-dark/70 leading-relaxed">
                                Komitmen kami adalah memberikan hasil yang nyata, aman, dan berkelanjutan. Kepuasan dan kesehatan kulit Anda adalah prioritas utama kami.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="space-y-4"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Interior klinik kecantikan AIRA yang modern dan nyaman"
                                        className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg"
                                        loading="lazy"
                                        width={300}
                                        height={256}
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Proses treatment perawatan kulit profesional"
                                        className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
                                        loading="lazy"
                                        width={300}
                                        height={192}
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="space-y-4 pt-12"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/3865621/pexels-photo-3865621.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Peralatan medis modern untuk perawatan kulit"
                                        className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
                                        loading="lazy"
                                        width={300}
                                        height={192}
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Dokter spesialis kulit AIRA Skin Clinic"
                                        className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg"
                                        loading="lazy"
                                        width={300}
                                        height={256}
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass p-6 rounded-2xl"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-dark/70">Terpercaya Sejak</p>
                                        <p className="text-xl font-bold text-dark">2019</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    {/* Blobs removed for solid design */}
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-4xl lg:text-5xl font-bold mb-4">Pencapaian Kami</h3>
                        <p className="text-white/90 text-lg">Angka yang membuktikan dedikasi dan kepercayaan Anda</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
                        {stats.map((stat, index) => (
                            <AnimatedStat key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                            Nilai-Nilai <span className="text-primary">Kami</span>
                        </h3>
                        <p className="text-dark/70 max-w-2xl mx-auto">
                            Prinsip yang menjadi fondasi setiap layanan kami
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start space-x-6 p-8 bg-white rounded-3xl border border-secondary hover:shadow-xl transition-all"
                            >
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-3 text-dark">{value.title}</h4>
                                    <p className="text-dark/70 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-xl"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold mb-4 text-dark">Misi Kami</h4>
                            <p className="text-dark/70 leading-relaxed">
                                Memberikan perawatan kulit berkualitas tinggi yang aman, efektif, dan terjangkau untuk semua kalangan. Kami berkomitmen untuk terus berinovasi dan mengembangkan layanan yang sesuai dengan kebutuhan kulit modern.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-xl"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold mb-4 text-dark">Visi Kami</h4>
                            <p className="text-dark/70 leading-relaxed">
                                Menjadi klinik kecantikan terdepan yang diakui secara nasional dalam memberikan solusi perawatan kulit holistik, dengan tetap menjaga nilai profesionalisme dan kepercayaan klien.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function AnimatedStat({ stat, index }: { stat: { value: number; suffix: string; label: string }; index: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
        >
            <motion.p
                className="text-5xl lg:text-6xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 }}
            >
                {count}{stat.suffix}
            </motion.p>
            <p className="text-white/90 text-lg">{stat.label}</p>
        </motion.div>
    );
}
