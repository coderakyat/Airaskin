import { useState, useEffect } from 'react';
import { fetchServices, fetchServiceCategories, Service } from '@/services/supabaseService';

interface UseServicesOptions {
    limit?: number;
}

interface UseServicesResult {
    services: Service[];
    categories: string[];
    loading: boolean;
    error: string | null;
}

export function useServices(options: UseServicesOptions = {}): UseServicesResult {
    const { limit } = options;
    const [services, setServices] = useState<Service[]>([]);
    const [categories, setCategories] = useState<string[]>(['Semua']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                setError(null);
                const [servicesData, categoriesData] = await Promise.all([
                    fetchServices(),
                    fetchServiceCategories()
                ]);
                setServices(limit ? servicesData.slice(0, limit) : servicesData);
                setCategories(categoriesData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load services');
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [limit]);

    return { services, categories, loading, error };
}

export default useServices;
