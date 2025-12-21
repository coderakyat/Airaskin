import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Briefcase, CheckCircle } from 'lucide-react';
import { doctors } from '../data/doctors';
import Button from '../components/Button';

export default function Doctors() {
  return (
    <div className="pt-24">
      <section className="gradient-mesh py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Tim <span className="text-gradient">Dokter Profesional</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Dokter spesialis kulit bersertifikat dengan pengalaman dan keahlian terbaik
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl border border-pink-100">
              <Award className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Bergabung dengan Tim Kami</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Kami selalu mencari dokter berkualitas untuk bergabung dengan tim profesional kami
              </p>
              <a href="mailto:career@airaskinclinic.com">
                <Button>Kirim Lamaran</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Keunggulan <span className="text-gradient">Tim Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mengapa pasien mempercayai tim dokter kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: 'Tersertifikasi', description: 'Lulusan universitas terkemuka' },
              { icon: Award, title: 'Berpengalaman', description: 'Minimal 7 tahun praktek' },
              { icon: Briefcase, title: 'Profesional', description: 'Standar pelayanan tertinggi' },
              { icon: CheckCircle, title: 'Terpercaya', description: 'Ribuan pasien puas' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DoctorCard({ doctor, index }: { doctor: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift"
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
          <p className="text-sm text-white/90">{doctor.title}</p>
        </div>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <p className="text-xs font-semibold text-pink-500">{doctor.experience}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Briefcase size={16} className="text-pink-500" />
            <p className="text-sm font-semibold text-gray-900">Spesialisasi</p>
          </div>
          <p className="text-sm text-gray-600 ml-6">{doctor.specialization}</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <GraduationCap size={16} className="text-pink-500" />
            <p className="text-sm font-semibold text-gray-900">Pendidikan</p>
          </div>
          <p className="text-sm text-gray-600 ml-6">{doctor.education}</p>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{doctor.bio}</p>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-900 mb-2">Sertifikasi</p>
          <div className="space-y-2">
            {doctor.certifications.map((cert: string, idx: number) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle size={14} className="text-pink-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-600">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        <Link to="/book" className="block mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium"
          >
            Konsultasi dengan {doctor.name.split(' ')[1]}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
