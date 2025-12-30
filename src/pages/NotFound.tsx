import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 pt-24">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-xl text-dark/70 mb-8 leading-relaxed">
                        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/">
                            <Button icon={Home}>
                                Kembali ke Beranda
                            </Button>
                        </Link>
                        <button onClick={() => window.history.back()}>
                            <Button variant="outline" icon={ArrowLeft}>
                                Kembali
                            </Button>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
