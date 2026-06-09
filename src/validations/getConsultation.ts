import * as yup from 'yup';
import type { TFunction } from 'i18next';

// Form data type
export type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    service: string;
    project_details: string;
};

// Create validation schema with i18n support
export const getConsultationValidationSchema = (t: TFunction) => {
    return yup.object().shape({
        name: yup
            .string()
            .required(t('contact-us.form.validation.name-required'))
            .min(2, t('contact-us.form.validation.name-min'))
            .max(50, t('contact-us.form.validation.name-max')),
        
        email: yup
            .string()
            .required(t('contact-us.form.validation.email-required'))
            .email(t('contact-us.form.validation.email-invalid')),
        
        phone: yup
            .string()
            .required(t('contact-us.form.validation.phone-required'))
            .matches(/^\+?[1-9]\d{0,15}$/, t('contact-us.form.validation.phone-invalid')),
        
        service: yup
            .string()
            .required(t('contact-us.form.validation.service-required')),
        
        project_details: yup
            .string()
            .required(t('contact-us.form.validation.project-details-required'))
            .min(10, t('contact-us.form.validation.project-details-min'))
            .max(1000, t('contact-us.form.validation.project-details-max'))
    });
};
