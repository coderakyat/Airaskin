import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/navigation/Breadcrumb';
import ErrorBoundary from '../components/utils/ErrorBoundary';

export default function MainLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Langsung ke konten utama
        </a>
        <Navbar />
        <Breadcrumb />
        <main id="main-content" className="flex-grow" role="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
