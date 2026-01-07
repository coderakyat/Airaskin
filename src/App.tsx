import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy load pages from features for code splitting
const LandingPage = lazy(() => import('./features/home/LandingPage'));
const ServicesPage = lazy(() => import('./features/services/ServicesPage'));
const DoctorsPage = lazy(() => import('./features/doctors/DoctorsPage'));
const GalleryPage = lazy(() => import('./features/gallery/GalleryPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/doctors" element={<DoctorsPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}
