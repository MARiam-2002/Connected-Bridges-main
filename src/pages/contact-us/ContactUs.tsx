import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PageTitle from '../../components/titles/PageTitle'
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { AllServicesData } from '../../constants/services';
import FormBuilder from '../../components/form-builder/FormBuilder';
import { getConsultationValidationSchema, type ContactFormData } from '../../validations/getConsultation';
import { submitConsultationMock } from '../../services/consultationSubmit';
import InfoCard from '../../components/cards/InfoCard';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { IconType } from 'react-icons/lib';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as animations from './animation';

// ====== data ====== //

const options = (t: TFunction) => AllServicesData(t).map(service => ({ value: service.id, label: service.title }));

const fields = (t: TFunction) => [

    {
        id: 'name' as const,
        label: 'contact-us.form.name',
        placeholder: 'contact-us.form.name-placeholder',
        type: 'text' as const,
        cols: 'col-span-1',
        isRequired: true,
    },
    {
        id: 'email' as const,
        label: 'contact-us.form.email',
        placeholder: 'contact-us.form.email-placeholder',
        type: 'text' as const,
        cols: 'col-span-1',
        isRequired: true,
    },
    {
        id: 'phone' as const,
        label: 'contact-us.form.phone',
        placeholder: 'contact-us.form.phone-placeholder',
        type: 'text' as const,
        cols: 'col-span-1',
        isRequired: true,
    },
    {
        id: 'service' as const,
        label: 'contact-us.form.service',
        placeholder: 'contact-us.form.service-placeholder',
        type: 'select' as const,
        cols: 'col-span-1',
        options: options(t),
        isRequired: true,
    },
    {
        id: 'project_details' as const,
        label: 'contact-us.form.project_details',
        placeholder: 'contact-us.form.project_details-placeholder',
        type: 'textarea' as const,
        cols: 'col-span-1',
        isRequired: true,
    },

];

const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.123456789!2d46.672601!3d24.682142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQwJzU1LjciTiA0NsKwNDAnMjEuNCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"

const infoCardsData = [

    {
        icon: Phone as IconType,
        title: 'contact-us.info-cards.phone',
        link: 'tel:+201140067845',
        description: 'contact-us.info-cards.phone-description'
    },

    {
        icon: Mail as IconType,
        title: 'contact-us.info-cards.email',
        link: 'mailto:info@connectedbridges.com',
        description: 'contact-us.info-cards.email-description'
    },

    {
        icon: MapPin as IconType,
        title: 'contact-us.info-cards.location',
        cols: 'col-span-2 max-[1185px]:col-span-1',
        link: 'https://www.google.com/maps?ll=24.682142,46.672601&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&q=Office9,+1321,+King+Abdulaziz+St.+Riyadh,+KSA',
        description: 'contact-us.info-cards.location-description'
    }

]

export default function ContactUs() {

    const { t, i18n } = useTranslation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: yupResolver(getConsultationValidationSchema(t)),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            project_details: ''
        }
    });

    const watchedValues = watch();

    const onSubmit = async (data: ContactFormData) => {
        try {

            const result = await submitConsultationMock(data);

            if (result.success) {
                alert(t('contact-us.form.success-message') || 'Form submitted successfully!');
            } else {
                alert(result.message || 'Error submitting form. Please try again.');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

    const [mapError, setMapError] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return <React.Fragment>

        <motion.section
            className='space-y-10 pb-20'
            ref={ref}
            variants={animations.pageContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >

            <PageTitle title={'contact-us.title'} description={'contact-us.description'} />

            <div className='common-p-inline grid grid-cols-5 items-start gap-5 max-[1185px]:grid-cols-2 max-[920px]:grid-cols-1'>

                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className='p-5 col-span-2 max-[1185px]:col-span-1 rounded-lg bg-[var(--white-color)] shadow-md space-y-5'
                    variants={animations.formContainer}
                >

                    <h4
                        className={`
                            text-3xl font-bold
                            ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                            from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent
                        `}
                    >
                        {t('contact-us.form.title')}
                    </h4>

                    <motion.div
                        className='grid grid-cols-1 gap-2.5'
                        variants={animations.formFieldsContainer}
                    >

                        {fields(t).map((field) => (
                            <motion.div key={field.id} variants={animations.formField}>
                                <FormBuilder
                                    {...field}
                                    register={register}
                                    errors={errors}
                                    value={watchedValues[field.id] || ''}
                                />
                            </motion.div>
                        ))}

                        <motion.button
                            type='submit'
                            disabled={isSubmitting}
                            className={`
                                cursor-pointer
                                w-full text-[var(--white-color)] px-5 py-2.5 rounded-md col-span-1 
                                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                                from-[var(--light-blue-color)] to-[var(--dark-blue-color)] font-medium
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                            variants={animations.formField}
                        >
                            {isSubmitting ? t('contact-us.form.submitting') : t('contact-us.form.submit')}
                        </motion.button>

                    </motion.div>

                </motion.form>

                <motion.div
                    className='grid grid-cols-2 gap-5 col-span-3 max-[1185px]:col-span-1 max-[1185px]:grid-cols-1'
                    variants={animations.infoCardsContainer}
                >

                    {infoCardsData.map((card, idx) => (
                        <motion.div key={idx} variants={animations.infoCard} className={card.cols}>
                            <InfoCard
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                link={card.link}
                            />
                        </motion.div>
                    ))}

                    <motion.div
                        className='col-span-2 space-y-5 p-5 rounded-lg bg-[var(--white-color)] shadow-md max-[1185px]:col-span-1'
                        variants={animations.mapContainer}
                    >

                        <h4 className='text-2xl font-bold text-[var(--dark-blue-color)]'>{t('contact-us.info-cards.live-location-title')}</h4>

                        {!mapError ? (
                            <iframe
                                src={mapLink}
                                width="100%"
                                height="250"
                                className='border-0 rounded-lg bg-[var(--mid-gray-color)]'
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onError={() => setMapError(true)}
                            />
                        ) : (
                            <div className="h-[250px] bg-[var(--mid-gray-color)] rounded-lg flex items-center justify-center">
                                <p className="text-[var(--dark-blue-color)] opacity-80">{t('contact-us.info-cards.location-description-blocked')}</p>
                            </div>
                        )}

                    </motion.div>

                </motion.div>

            </div>

        </motion.section>

    </React.Fragment>

}
