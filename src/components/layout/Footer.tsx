import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'tim-dokter', label: 'Tim Dokter' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer role="contentinfo" className="bg-dark text-white">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AIRA</h3>
                <p className="text-sm text-gray-400 -mt-1">Skin Clinic</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Klinik kecantikan terpercaya yang menghadirkan solusi perawatan kulit dengan teknologi terkini dan tim profesional.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Layanan Populer</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">Facial Glow Treatment</li>
              <li className="text-white/60 text-sm">Acne Treatment Pro</li>
              <li className="text-white/60 text-sm">Anti-Aging Signature</li>
              <li className="text-white/60 text-sm">Brightening Booster</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-light mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Jl. Sudirman No. 123<br />
                  Jakarta Selatan, 12190
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-light flex-shrink-0" />
                <span className="text-white/60 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-light flex-shrink-0" />
                <span className="text-white/60 text-sm">info@airaskinclinic.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; 2024 AIRA Skin Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
