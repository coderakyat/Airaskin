export interface Doctor {
    id: number;
    name: string;
    title: string;
    specialization: string;
    experience: string;
    education: string;
    image: string;
    bio: string;
    certifications: string[];
}

export interface Service {
    id: number;
    title: string;
    category: string;
    description: string;
    price: string;
    duration: string;
    image: string;
    benefits: string[];
}

export interface GalleryItem {
    id: number;
    category: string;
    title: string;
    before: string;
    after: string;
    treatment: string;
    description: string;
}

export interface Testimonial {
    id: number;
    name: string;
    age: number;
    treatment: string;
    rating: number;
    review: string;
    image: string;
    date: string;
}
