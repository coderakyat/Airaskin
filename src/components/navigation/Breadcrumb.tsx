import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbItem = {
    label: string;
    path: string;
};

const pathLabels: Record<string, string> = {
    '/': 'Beranda',
    '/services': 'Layanan',
    '/doctors': 'Tim Dokter',
    '/gallery': 'Galeri',
    '/testimonials': 'Testimoni',
    '/about': 'Tentang Kami',
    '/book': 'Konsultasi',
    '/home': 'Beranda',
};

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Don't show breadcrumb on landing page
    if (location.pathname === '/' || location.pathname === '/home') {
        return null;
    }

    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Beranda', path: '/' },
        ...pathnames.map((_, index) => {
            const path = `/${pathnames.slice(0, index + 1).join('/')}`;
            return {
                label: pathLabels[path] || path.replace('/', '').replace(/-/g, ' '),
                path,
            };
        }),
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-gray-50 to-pink-50/30 border-b border-gray-100"
        >
            <div className="container mx-auto px-6 lg:px-12 py-4">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((breadcrumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        return (
                            <li key={breadcrumb.path} className="flex items-center">
                                {index > 0 && (
                                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                                )}
                                {isLast ? (
                                    <span className="font-medium text-pink-500">
                                        {breadcrumb.label}
                                    </span>
                                ) : (
                                    <Link
                                        to={breadcrumb.path}
                                        className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
                                    >
                                        {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                        {breadcrumb.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </motion.nav>
    );
}
