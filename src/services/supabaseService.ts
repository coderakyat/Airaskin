import { supabase } from '@/lib/supabaseClient';

// ==================
// TYPE DEFINITIONS
// ==================

export interface Doctor {
    id: string;
    name: string;
    title: string;
    image: string;
    experience: string;
    specialization: string;
    education: string;
    bio: string;
    certifications: string[];
    created_at?: string;
    updated_at?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    duration: string;
    price: string;
    benefits: string[];
    created_at?: string;
    updated_at?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    age: number;
    image: string;
    rating: number;
    review: string;
    treatment: string;
    created_at?: string;
    updated_at?: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    category: string;
    treatment: string;
    before: string;
    after: string;
    created_at?: string;
    updated_at?: string;
}

// ==================
// FETCH FUNCTIONS
// ==================

export async function fetchDoctors(): Promise<Doctor[]> {
    const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching doctors:', error.message);
        return [];
    }

    return data || [];
}

export async function fetchServices(): Promise<Service[]> {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching services:', error.message);
        return [];
    }

    return data || [];
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching testimonials:', error.message);
        return [];
    }

    return data || [];
}

export async function fetchGallery(): Promise<GalleryItem[]> {
    const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Error fetching gallery:', error.message);
        return [];
    }

    return data || [];
}

// ==================
// CATEGORY HELPERS
// ==================

export async function fetchServiceCategories(): Promise<string[]> {
    const { data, error } = await supabase
        .from('services')
        .select('category');

    if (error) {
        console.error('Error fetching service categories:', error.message);
        return [];
    }

    const categories = [...new Set(data?.map(s => s.category) || [])];
    return ['Semua', ...categories];
}

export async function fetchGalleryCategories(): Promise<string[]> {
    const { data, error } = await supabase
        .from('gallery')
        .select('category');

    if (error) {
        console.error('Error fetching gallery categories:', error.message);
        return [];
    }

    const categories = [...new Set(data?.map(g => g.category) || [])];
    return ['Semua', ...categories];
}
