import { useState, useEffect } from 'react';
import { fetchGallery, fetchGalleryCategories, GalleryItem } from '@/services/supabaseService';

interface UseGalleryOptions {
    limit?: number;
}

interface UseGalleryResult {
    gallery: GalleryItem[];
    categories: string[];
    loading: boolean;
    error: string | null;
}

export function useGallery(options: UseGalleryOptions = {}): UseGalleryResult {
    const { limit } = options;
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [categories, setCategories] = useState<string[]>(['Semua']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                setError(null);
                const [galleryData, categoriesData] = await Promise.all([
                    fetchGallery(),
                    fetchGalleryCategories()
                ]);
                setGallery(limit ? galleryData.slice(0, limit) : galleryData);
                setCategories(categoriesData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load gallery');
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [limit]);

    return { gallery, categories, loading, error };
}

export default useGallery;
