import { useState, useEffect } from 'react';
import { fetchDoctors, Doctor } from '@/services/supabaseService';

interface UseDoctorsOptions {
    limit?: number;
}

interface UseDoctorsResult {
    doctors: Doctor[];
    loading: boolean;
    error: string | null;
}

export function useDoctors(options: UseDoctorsOptions = {}): UseDoctorsResult {
    const { limit } = options;
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchDoctors();
                setDoctors(limit ? data.slice(0, limit) : data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load doctors');
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [limit]);

    return { doctors, loading, error };
}

export default useDoctors;
