import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { dropdownContainerVariants } from "./animation";

type ListOption = {
    value: string | number;
    label: string;
};

type ListInputProps<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    placeholder: string;
    error?: string;
    value: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    options: ListOption[];
    isRequired?: boolean;
    disabled?: boolean;
    register: UseFormRegister<T>;
};

export default function ListInput<T extends FieldValues>({
    id,
    label,
    placeholder,
    error,
    value,
    onChange,
    onBlur,
    options,
    isRequired = true,
    disabled = false,
    register,
}: ListInputProps<T>) {
    
    const { t, i18n } = useTranslation();
    const [hasValue, setHasValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setIsFocused(false);
                if (onBlur) onBlur();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onBlur]);

    const handleInputClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            setIsFocused(true);
        }
    };

    const handleOptionSelect = (optionValue: string | number) => {
        const stringValue = optionValue.toString();
        
        // Update React Hook Form value
        registerOnChange({
            target: {
                name: name,
                value: stringValue
            }
        });
        
        // Update local onChange if provided
        if (onChange) onChange(stringValue);
        
        setIsOpen(false);
        setIsFocused(false);
        if (onBlur) onBlur();
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        // Blur is handled by click outside
    };

    const selectedOption = options.find(option => option.value.toString() === value);

    const { onChange: registerOnChange, onBlur: registerOnBlur, name, ref } = register(id, {
        required: isRequired ? `${t(label)} is required` : false
    });

    return  <React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group mb-1`} ref={dropdownRef}>

            <label 
                className={`flex items-center gap-1.5 cursor-pointer`} 
                htmlFor={id}
                onClick={handleInputClick}
            >
                <p
                    className={`
                        ${hasValue 
                            ? 'text-[var(--dark-blue-color)]' 
                            : (isFocused ? 'text-[var(--dark-blue-color)]' : 'text-[var(--dark-blue-opacity-color-2)]')
                        } 
                        duration-300 group-focus-within:text-[var(--dark-blue-color)] text-base font-medium
                    `}
                >
                    {t(label)}
                </p>
                {isRequired && <p className='text-sm text-[var(--red-color)]'>*</p>}
            </label>

            <div 
                ref={inputRef}
                className={`
                    relative w-full h-10 px-2.5 ${i18n.language === 'en' ? 'pr-10.5' : 'pl-10.5'} rounded-md border 
                    ${hasValue 
                        ? 'border-[var(--dark-blue-color)]' 
                        : (isFocused ? 'border-[var(--dark-blue-color)]' : 'border-[var(--dark-blue-opacity-color-2)]')
                    } 
                    outline-0 duration-300 focus:border-[var(--dark-blue-color)] text-base font-medium text-[var(--black-color)]
                    ${disabled ? 'bg-[var(--gray-color)] cursor-not-allowed ' : 'cursor-pointer'}
                    flex items-center text-sm text-[var(--dark-blue-color)]
                    ${error ? 'border-[var(--red-color)]' : ''}
                `}
                onClick={handleInputClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={disabled ? -1 : 0}
            >
                <span className={`
                    ${selectedOption ? 'text-[var(--black-color)]' : 'text-[var(--dark-blue-opacity-color)] opacity-50'}
                    truncate
                `}>
                    {selectedOption ? t(selectedOption.label) : t(placeholder)}
                </span>
            </div>

            {/* Hidden input for React Hook Form */}
            <input
                type="hidden"
                name={name}
                ref={ref}
                value={value}
                onChange={(e) => {
                    registerOnChange(e);
                    if (onChange) onChange(e.target.value);
                }}
                onBlur={registerOnBlur}
            />

            {/* Chevron Icon */}
            <div 
                onClick={handleInputClick}
                className={`
                    absolute ${i18n.language === 'en' ? 'right-2.5' : 'left-2.5'}
                    bottom-0 text-2xl h-10 flex items-center duration-300
                    ${hasValue ? 
                        'text-[var(--dark-blue-color)]' : (isFocused ? 'text-[var(--dark-blue-color)]' : 'text-[var(--gray-color)]')
                    } 
                    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
            >
                <motion.div
                    animate={{ 
                        rotate: isOpen ? (i18n.language === 'ar' ? -90 : 90) : 0,
                        color: isHovered && !disabled ? 'var(--dark-blue-color)' : undefined
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    <ChevronRight className={i18n.language === 'ar' ? 'rotate-180' : ''} />
                </motion.div>
            </div>

            {/* Dropdown Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={dropdownContainerVariants.hidden}
                        animate={dropdownContainerVariants.visible}
                        exit={dropdownContainerVariants.exit}
                        className={`
                            absolute top-full left-0 right-0 mt-1 bg-[var(--white-color)] border border-[var(--dark-blue-opacity-color)] 
                            rounded-md shadow-lg z-30 max-h-60 overflow-y-auto overflow-x-hidden scrollbar-hide
                        `}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {options.map((option, index) => (
                            <motion.div
                                key={option.value}
                                initial={{ opacity: 0, x: i18n.language === 'en' ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: i18n.language === 'en' ? 20 : -20 }}
                                transition={{ 
                                    delay: 0.1 + (index * 0.07), 
                                    duration: 0.2 
                                }}
                                className={`
                                    relative p-2.5 cursor-pointer text-base font-medium text-[var(--dark-blue-color)] !opacity-80
                                    border-b border-[var(--light-gray-color)]
                                    transition-colors duration-300 last:border-b-0
                                    before:content-[""] before:absolute before:inset-0 before:z-[-1]
                                    before:bg-gradient-to-r before:transition-opacity before:duration-300
                                    ${i18n.language === 'ar' 
                                        ? 'before:from-[var(--light-blue-color)] before:to-[var(--dark-blue-color)]' 
                                        : 'before:from-[var(--dark-blue-color)] before:to-[var(--light-blue-color)]'
                                    }
                                    ${option.value.toString() === value 
                                        ? 'text-[var(--white-color)] before:opacity-100 !opacity-100' 
                                        : 'hover:text-[var(--white-color)] hover:before:opacity-100 before:opacity-0 hover:!opacity-100'
                                    }
                                `}
                                onClick={() => handleOptionSelect(option.value)}
                            >
                                {t(option.label)}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

        {error && <p className='text-xs text-[var(--red-color)]'>{error}</p>}

    </React.Fragment>

}
