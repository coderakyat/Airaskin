import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { useReservation } from '@/context/ReservationContext';
import Button from '@/components/ui/Button';

export default function ReservationModal() {
    const { isOpen, closeModal, serviceName } = useReservation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        if (isOpen && serviceName) {
            setFormData(prev => ({ ...prev, service: serviceName }));
        }
    }, [isOpen, serviceName]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Format message for WhatsApp
        const message = `Halo Admin Contoh5, saya ingin melakukan reservasi:
        
Nama: ${formData.name}
No. HP: ${formData.phone}
Layanan: ${formData.service}
Tanggal: ${formData.date}
Jam: ${formData.time}

Mohon konfirmasinya. Terima kasih.`;

        // Direct to WhatsApp (replace with actual number)
        const waNumber = "6281234567890"; // Example number
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
        
        closeModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl pointer-events-auto overflow-hidden border border-white/20"
                        >
                            {/* Header */}
                            <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-dark flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                        Reservasi Online
                                    </h3>
                                    <p className="text-dark/60 text-sm mt-1">Dapatkan perawatan terbaik untuk kulitmu</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-black/5 rounded-full transition-colors relative z-10"
                                >
                                    <X className="w-5 h-5 text-dark/70" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <label className="text-sm font-medium text-dark/70 mb-1.5 block">Nama Lengkap</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pl-11 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all group-hover:bg-white"
                                                placeholder="Masukkan nama lengkap"
                                            />
                                            <User className="w-5 h-5 text-dark/40 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-primary" />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className="text-sm font-medium text-dark/70 mb-1.5 block">Nomor WhatsApp</label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pl-11 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all group-hover:bg-white"
                                                placeholder="08xxxxxxxxxx"
                                            />
                                            <Phone className="w-5 h-5 text-dark/40 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-primary" />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className="text-sm font-medium text-dark/70 mb-1.5 block">Jenis Perawatan</label>
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 pl-11 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer hover:bg-white"
                                            >
                                                <option value="">Pilih layanan...</option>
                                                <option value="Facial Treatment">Facial Treatment</option>
                                                <option value="Laser Treatment">Laser Treatment</option>
                                                <option value="Acne Treatment">Acne Treatment</option>
                                                <option value="Anti Aging">Anti Aging</option>
                                                <option value="Body Treatment">Body Treatment</option>
                                                <option value="Konsultasi Dokter">Konsultasi Dokter</option>
                                            </select>
                                            <Sparkles className="w-5 h-5 text-dark/40 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-primary" />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-300">
                                                <svg className="w-4 h-4 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <label className="text-sm font-medium text-dark/70 mb-1.5 block">Tanggal</label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    required
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all group-hover:bg-white"
                                                />
                                                <Calendar className="w-5 h-5 text-dark/40 absolute left-3 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-primary" />
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <label className="text-sm font-medium text-dark/70 mb-1.5 block">Jam</label>
                                            <div className="relative">
                                                <input
                                                    type="time"
                                                    name="time"
                                                    required
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all group-hover:bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full py-4 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30"
                                        icon={Phone}
                                    >
                                        Kirim ke WhatsApp
                                    </Button>
                                    <p className="text-center text-xs text-dark/50 mt-4">
                                        Admin kami akan segera mengonfirmasi jadwal Anda
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
