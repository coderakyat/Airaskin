import {
    HeroSection,
    AboutSection,
    ServicesSection,
    DoctorsSection,
    GallerySection,
    CTASection
} from '../sections';

export default function LandingPage() {
    return (
        <div>
            {/* Beranda / Hero Section */}
            <section id="beranda">
                <HeroSection />
            </section>

            {/* Tentang Kami Section */}
            <section id="tentang-kami">
                <AboutSection />
            </section>

            {/* Layanan Section */}
            <section id="layanan">
                <ServicesSection limit={3} />
            </section>

            {/* Tim Dokter Section */}
            <section id="tim-dokter">
                <DoctorsSection />
            </section>

            {/* Hasil Nyata / Gallery Section */}
            <section id="hasil-nyata">
                <GallerySection />
            </section>

            {/* CTA Section */}
            <section id="cta">
                <CTASection />
            </section>
        </div>
    );
}
