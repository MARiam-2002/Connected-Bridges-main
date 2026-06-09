import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import LoadingInput from "./LoadingInput";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { opacityVariants } from "./animation";

type BaseInputProps<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    placeholder: string;
    error?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    isRequired?: boolean;
    register: UseFormRegister<T>;
};

export default function BaseInput<T extends FieldValues>({
    id,
    label,
    placeholder,
    error,
    value,
    onChange,
    onBlur,
    type = "text",
    isRequired = true,
    register,
}: BaseInputProps<T>) {

    const {t, i18n} = useTranslation();

    const [hasValue, setHasValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.trim() !== '');
        if (onChange) onChange(e);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    // ====== handle-password-visibility ====== //

    const [passType, setPassType] = useState<string | null>(null);

    const handlePasswordVisibility = () => {
        setPassType(prev => prev === 'password' ? 'text' : 'password') 
    }

    const { onChange: registerOnChange, onBlur: registerOnBlur, name, ref } = register(id, {
        required: isRequired ? `${t(label)} is required` : false,
        ...(type === 'email' && {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
            }
        })
    });

    return <React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group mb-1`}>

            <label 
                className={`flex items-center gap-1.5`} 
                htmlFor={id}
            >
                <p
                    className={`
                        ${hasValue ? 'text-[var(--dark-blue-color)]' : 'text-[var(--dark-blue-opacity-color-2)]'} 
                        duration-300 group-focus-within:text-[var(--dark-blue-color)] text-base font-medium
                    `}
                >{t(label)}</p>
                {isRequired && <p className='text-sm text-[var(--red-color)]'>*</p>}
            </label>

            <input 
                id={id}
                name={name}
                ref={ref}
                type={passType ? passType : type}
                placeholder={t(placeholder)}
                className={`
                    w-full h-10 px-2.5 ${i18n.language === 'en' ? 'pr-10.5' : 'pl-10.5'} rounded-md border 
                    ${hasValue ? 'border-[var(--dark-blue-color)]' : 'border-[var(--dark-blue-opacity-color-2)]'} 
                    placeholder:text-[var(--dark-blue-opacity-color)] placeholder:opacity-50
                    outline-0 duration-300 focus:border-[var(--dark-blue-color)] text-sm font-medium text-[var(--black-color)]
                    ${error ? 'border-[var(--red-color)]' : ''}
                `}
                value={value}
                onChange={(e) => {
                    handleInputChange(e);
                    registerOnChange(e);
                }}
                onFocus={handleFocus}
                onBlur={(e) => {
                    handleBlur(e);
                    registerOnBlur(e);
                }}
            />

            {/* ====== animations-on-focus ====== */}

            <AnimatePresence>

                {(isFocused || hasValue) && !passType && (
                    <motion.div 
                        initial={opacityVariants.hidden}
                        animate={opacityVariants.visible}
                        exit={opacityVariants.exit}
                        className={`absolute bottom-4.25 ${i18n.language === 'en' ? 'right-2.5' : 'left-2.5'}`}
                    >
                        <LoadingInput />
                    </motion.div>
                )}

            </AnimatePresence>

            {/* ====== password-status ====== */}

            {passType === 'password' && (
                <div 
                    onClick={handlePasswordVisibility} 
                    className={`
                        absolute ${i18n.language === 'en' ? 'right-2.5' : 'left-2.5'}
                        bottom-0 text-2xl h-10 flex items-center duration-300
                        ${hasValue ? 
                            'text-[var(--dark-blue-color)]' : (isFocused ? 'text-[var(--dark-blue-color)]' : 'text-[var(--gray-color)]')
                        } 
                        cursor-pointer
                    `}
                >
                    {passType === 'password' ? 

                        <motion.button 
                            key={'s1'} type='button' className='cursor-pointer' 
                            initial={opacityVariants.hidden}
                            animate={opacityVariants.visible}
                        >
                            <VscEye />
                        </motion.button> : 

                        <motion.button 
                            key={'h1'} className='cursor-pointer' type='button'
                            initial={opacityVariants.hidden}
                            animate={opacityVariants.visible}
                        >
                            <VscEyeClosed />
                        </motion.button>
                    }
                </div>
            )}

        </div>

        {error && <p className='text-xs text-[var(--red-color)]'>{error}</p>}

    </React.Fragment>

}
