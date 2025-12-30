-- ============================================
-- SUPABASE MIGRATION: ROW LEVEL SECURITY (RLS)
-- Jalankan script ini SETELAH 01_create_tables.sql
-- ============================================

-- Enable RLS on all tables
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- =====================
-- PUBLIC READ POLICIES
-- Memungkinkan siapa saja membaca data (untuk landing page)
-- =====================

-- Doctors: Public can read
CREATE POLICY "Allow public read access on doctors" 
ON doctors FOR SELECT 
TO anon, authenticated 
USING (true);

-- Services: Public can read
CREATE POLICY "Allow public read access on services" 
ON services FOR SELECT 
TO anon, authenticated 
USING (true);

-- Testimonials: Public can read
CREATE POLICY "Allow public read access on testimonials" 
ON testimonials FOR SELECT 
TO anon, authenticated 
USING (true);

-- Gallery: Public can read
CREATE POLICY "Allow public read access on gallery" 
ON gallery FOR SELECT 
TO anon, authenticated 
USING (true);

-- =====================
-- AUTHENTICATED WRITE POLICIES (untuk Admin Panel)
-- Hanya user yang login yang bisa INSERT/UPDATE/DELETE
-- =====================

-- Doctors: Authenticated users can manage
CREATE POLICY "Allow authenticated insert on doctors" 
ON doctors FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated update on doctors" 
ON doctors FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on doctors" 
ON doctors FOR DELETE 
TO authenticated 
USING (true);

-- Services: Authenticated users can manage
CREATE POLICY "Allow authenticated insert on services" 
ON services FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated update on services" 
ON services FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on services" 
ON services FOR DELETE 
TO authenticated 
USING (true);

-- Testimonials: Authenticated users can manage
CREATE POLICY "Allow authenticated insert on testimonials" 
ON testimonials FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated update on testimonials" 
ON testimonials FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on testimonials" 
ON testimonials FOR DELETE 
TO authenticated 
USING (true);

-- Gallery: Authenticated users can manage
CREATE POLICY "Allow authenticated insert on gallery" 
ON gallery FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Allow authenticated update on gallery" 
ON gallery FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on gallery" 
ON gallery FOR DELETE 
TO authenticated 
USING (true);
