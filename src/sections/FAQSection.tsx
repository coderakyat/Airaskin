import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Apakah konsultasi dokter di Contoh5 gratis?",
        answer: "Ya, kami menyediakan sesi konsultasi awal gratis untuk menganalisis kondisi kulit Anda dan merekomendasikan perawatan yang paling tepat sesuai kebutuhan."
    },
    {
        question: "Berapa lama durasi rata-rata untuk satu kali treatment?",
        answer: "Durasi treatment bervariasi tergantung jenis perawatan, mulai dari 30 menit untuk facial dasar hingga 90 menit untuk prosedur yang lebih kompleks. Dokter kami akan menginformasikan estimasi waktu sebelum perawatan dimulai."
    },
    {
        question: "Apakah perawatan di Contoh5 aman untuk kulit sensitif?",
        answer: "Tentu saja. Kami memiliki protokol khusus dan produk yang diformulasikan untuk berbagai jenis kulit, termasuk kulit sensitif. Dokter akan melakukan tes sensitivitas jika diperlukan."
    },
    {
        question: "Bagaimana cara melakukan reservasi jadwal?",
        answer: "Anda dapat melakukan reservasi dengan mudah melalui tombol 'Reservasi' atau 'Konsultasi' di website ini yang akan terhubung langsung ke WhatsApp admin kami, atau datang langsung ke klinik."
    },
    {
        question: "Produk apa yang digunakan di Contoh5?",
        answer: "Kami menggunakan produk skincare premium bertaraf internasional yang telah teruji klinis dan bersertifikasi BPOM, serta dikombinasikan dengan teknologi peralatan medis terkini."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    console.log("FAQSection rendering");

    return (
        <section className="py-16 md:py-24 bg-gray-100 border-t border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm"
                    >
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-dark/70">Pertanyaan Umum</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4"
                    >
                        Yang Sering <span className="text-primary">Ditanyakan</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-dark/60 max-w-2xl mx-auto"
                    >
                        Jawaban untuk pertanyaan yang sering diajukan oleh pasien kami mengenai perawatan dan layanan klinik.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`w-full text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 ${activeIndex === index
                                    ? 'bg-white shadow-lg border-primary/20'
                                    : 'bg-white hover:bg-gray-50 hover:shadow-md border-transparent'
                                    } border flex justify-between items-start gap-4 group`}
                            >
                                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary/80'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`p-1 rounded-full border transition-all duration-300 ${activeIndex === index
                                    ? 'bg-primary text-white border-primary rotate-180'
                                    : 'bg-transparent text-dark/40 border-dark/10 group-hover:border-primary/50 group-hover:text-primary'
                                    }`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 sm:p-8 pt-0 text-dark/70 leading-relaxed bg-white rounded-b-2xl mx-2 -mt-2 border-x border-b border-primary/10 shadow-lg shadow-gray-100 mb-2">
                                            {faq.answer}
                                        </div>
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
