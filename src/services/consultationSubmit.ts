import type { ContactFormData } from '../validations/getConsultation';

// API response type
export type ConsultationResponse = {
    success: boolean;
    message: string;
    data?: unknown;
};

// Submit consultation form
export const submitConsultation = async (data: ContactFormData): Promise<ConsultationResponse> => {
    try {
        const response = await fetch('/api/consultation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        return {
            success: true,
            message: 'Consultation submitted successfully',
            data: result
        };
    } catch (error) {
        console.error('Error submitting consultation:', error);
        
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Failed to submit consultation'
        };
    }
};

// Alternative implementation for development/testing
export const submitConsultationMock = async (data: ContactFormData): Promise<ConsultationResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success response
    return {
        success: true,
        message: 'Consultation submitted successfully (Mock)',
        data: {
            id: Math.random().toString(36).substr(2, 9),
            submittedAt: new Date().toISOString(),
            ...data
        }
    };
};
