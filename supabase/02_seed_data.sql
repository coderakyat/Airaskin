-- ============================================
-- SUPABASE MIGRATION: SEED DATA
-- Jalankan script ini SETELAH 01_create_tables.sql
-- ============================================

-- =====================
-- SEED DATA: DOCTORS
-- =====================
INSERT INTO doctors (name, title, image, experience, specialization, education, bio, certifications) VALUES
(
    'dr. Sarah Wijaya, Sp.KK',
    'Dokter Spesialis Kulit & Kelamin',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
    '12 Tahun',
    'Dermatologi Kosmetik, Anti-Aging, Laser Treatment',
    'Universitas Indonesia - Fakultas Kedokteran',
    'Dr. Sarah adalah ahli dalam perawatan kulit anti-aging dan teknologi laser terkini. Berpengalaman menangani berbagai kondisi kulit dengan pendekatan holistik.',
    ARRAY['Board Certified Dermatologist', 'American Academy of Dermatology Member', 'Certified Laser Specialist']
),
(
    'dr. Michael Chen, Sp.KK',
    'Dokter Spesialis Kulit & Kelamin',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
    '10 Tahun',
    'Acne Treatment, Chemical Peeling, Skincare Consultation',
    'Universitas Airlangga - Fakultas Kedokteran',
    'Dr. Michael fokus pada penanganan jerawat dan masalah kulit berulang. Terkenal dengan pendekatan personal dan hasil yang konsisten.',
    ARRAY['Indonesian Dermatology Association', 'Chemical Peel Certification', 'Acne Specialist Training']
),
(
    'dr. Amanda Putri, Sp.KK',
    'Dokter Spesialis Kulit & Kelamin',
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
    '8 Tahun',
    'Facial Rejuvenation, Botox, Filler, PRP Therapy',
    'Universitas Gadjah Mada - Fakultas Kedokteran',
    'Dr. Amanda spesialisasi dalam prosedur non-invasif untuk peremajaan wajah. Dikenal dengan teknik injeksi yang halus dan hasil natural.',
    ARRAY['Certified Aesthetic Practitioner', 'Botox & Filler Expert', 'PRP Therapy Specialist']
);

-- =====================
-- SEED DATA: SERVICES
-- =====================
INSERT INTO services (title, description, image, category, duration, price, benefits) VALUES
(
    'Facial Glow Treatment',
    'Perawatan wajah premium untuk kulit glowing dan sehat. Kombinasi deep cleansing, exfoliation, dan nutrisi intensif.',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    'Facial',
    '60 menit',
    'Rp 850.000',
    ARRAY['Kulit lebih cerah', 'Pori-pori mengecil', 'Hidrasi maksimal', 'Relaxasi total']
),
(
    'Laser Rejuvenation',
    'Treatment laser canggih untuk mengatasi penuaan dini, kerutan halus, dan memperbaiki tekstur kulit.',
    'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&h=400&fit=crop',
    'Laser',
    '45 menit',
    'Rp 2.500.000',
    ARRAY['Anti-aging efektif', 'Stimulasi kolagen', 'Minimal downtime', 'Hasil long-lasting']
),
(
    'Acne Clear Program',
    'Program lengkap untuk mengatasi jerawat membandel. Kombinasi treatment klinis dan homecare.',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
    'Acne',
    '45 menit',
    'Rp 1.200.000',
    ARRAY['Membunuh bakteri jerawat', 'Mengontrol minyak', 'Mencegah bekas jerawat', 'Konsultasi gratis']
),
(
    'Chemical Peeling',
    'Eksfoliasi kimia untuk mengangkat sel kulit mati dan merangsang regenerasi kulit baru yang lebih sehat.',
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop',
    'Peeling',
    '30 menit',
    'Rp 750.000',
    ARRAY['Kulit lebih halus', 'Mengurangi hiperpigmentasi', 'Mencerahkan wajah', 'Meratakan warna kulit']
),
(
    'Botox & Filler',
    'Prosedur non-invasif untuk mengurangi kerutan dan menambah volume wajah dengan hasil natural.',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    'Injeksi',
    '30 menit',
    'Rp 3.500.000',
    ARRAY['Hasil instan', 'Tampilan natural', 'Tanpa operasi', 'Minimal recovery']
),
(
    'PRP Vampire Facial',
    'Perawatan regeneratif menggunakan platelet dari darah sendiri untuk meremajakan kulit secara alami.',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
    'Regeneratif',
    '60 menit',
    'Rp 4.000.000',
    ARRAY['100% alami', 'Regenerasi sel kulit', 'Anti-aging natural', 'Aman tanpa alergi']
);

-- =====================
-- SEED DATA: TESTIMONIALS
-- =====================
INSERT INTO testimonials (name, age, image, rating, review, treatment) VALUES
(
    'Rina Susanti',
    28,
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    5,
    'Hasil luar biasa! Kulit saya jadi jauh lebih cerah dan glowing setelah perawatan di sini. Dokternya sangat profesional dan ramah.',
    'Facial Glow Treatment'
),
(
    'Dewi Anggraini',
    32,
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    5,
    'Akhirnya jerawat saya teratasi setelah bertahun-tahun mencoba berbagai produk. Terima kasih tim Airaskin!',
    'Acne Clear Program'
),
(
    'Maya Sari',
    35,
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    5,
    'Laser treatment-nya amazing! Kerutan halus di sekitar mata saya berkurang signifikan. Sangat recommended!',
    'Laser Rejuvenation'
),
(
    'Linda Wijaya',
    40,
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop',
    5,
    'Botox di sini hasilnya sangat natural, tidak kaku sama sekali. Dokternya sangat teliti dan detail.',
    'Botox & Filler'
),
(
    'Siska Permata',
    29,
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop',
    5,
    'Pelayanan premium dengan harga yang masih reasonable. Staff-nya ramah dan kliniknya sangat bersih.',
    'Chemical Peeling'
),
(
    'Anita Rahayu',
    33,
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    5,
    'PRP treatment benar-benar mengubah kulit saya. Lebih kenyal dan tampak lebih muda. Worth it!',
    'PRP Vampire Facial'
);

-- =====================
-- SEED DATA: GALLERY (Before/After)
-- =====================
INSERT INTO gallery (title, description, category, treatment, before, after) VALUES
(
    'Transformasi Acne Severe',
    'Perjalanan 3 bulan mengatasi jerawat parah hingga kulit bersih dan sehat.',
    'Acne',
    'Acne Clear Program',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop'
),
(
    'Anti-Aging Result',
    'Hasil treatment laser untuk mengurangi kerutan dan garis halus.',
    'Anti-Aging',
    'Laser Rejuvenation',
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop'
),
(
    'Skin Brightening Journey',
    'Transformasi kulit kusam menjadi cerah dan glowing.',
    'Brightening',
    'Facial Glow Treatment',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=400&h=400&fit=crop'
),
(
    'Pore Minimizing',
    'Pengecilan pori-pori wajah yang terlihat signifikan.',
    'Facial',
    'Chemical Peeling',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=400&fit=crop'
),
(
    'Natural Rejuvenation',
    'Hasil PRP untuk peremajaan wajah secara alami.',
    'Regeneratif',
    'PRP Vampire Facial',
    'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop'
),
(
    'Filler Enhancement',
    'Penambahan volume wajah dengan hasil yang natural.',
    'Injeksi',
    'Botox & Filler',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
);
