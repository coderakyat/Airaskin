import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReservationContextType {
    isOpen: boolean;
    serviceName: string;
    openModal: (serviceName?: string) => void;
    closeModal: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceName, setServiceName] = useState('');

    const openModal = (name: string = '') => {
        setServiceName(name);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setServiceName('');
    };

    return (
        <ReservationContext.Provider value={{ isOpen, serviceName, openModal, closeModal }}>
            {children}
        </ReservationContext.Provider>
    );
}

export function useReservation() {
    const context = useContext(ReservationContext);
    if (context === undefined) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
}
