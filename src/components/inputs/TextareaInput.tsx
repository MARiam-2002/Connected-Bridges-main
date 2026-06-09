import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

type TextareaInputProps<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    placeholder: string;
    error?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    isRequired?: boolean;
    register: UseFormRegister<T>;
};

export default function TextareaInput<T extends FieldValues>({
    id,
    label,
    placeholder,
    error,
    value,
    onChange,
    onBlur,
    isRequired = true,
    register,
}: TextareaInputProps<T>) {

    const {t} = useTranslation();

    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHasValue(e.target.value.trim() !== '');
        if (onChange) onChange(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (onBlur) onBlur(e);
    };

    const { onChange: registerOnChange, onBlur: registerOnBlur, name, ref } = register(id, {
        required: isRequired ? `${t(label)} is required` : false,
        minLength: {
            value: 10,
            message: 'Message must be at least 10 characters'
        }
    });

    return <React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group`}>

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

            <textarea 
                id={id}
                name={name}
                ref={ref}
                placeholder={t(placeholder)}
                className={`
                    w-full px-2.5 py-2.5 rounded-md border min-h-28 max-h-40 overflow-y-auto scrollbar-hide
                    ${hasValue ? 'border-[var(--dark-blue-color)]' : 'border-[var(--dark-blue-opacity-color-2)]'} 
                    placeholder:text-[var(--dark-blue-opacity-color)] placeholder:opacity-50 resize-none
                    outline-0 duration-300 focus:border-[var(--dark-blue-color)] text-sm font-medium text-[var(--black-color)]
                    ${error ? 'border-[var(--red-color)]' : ''}
                `}
                value={value}
                onChange={(e) => {
                    handleInputChange(e);
                    registerOnChange(e);
                }}
                onBlur={(e) => {
                    handleBlur(e);
                    registerOnBlur(e);
                }}
            />

            {error && <p className='text-xs text-[var(--red-color)]'>{error}</p>}

        </div>

    </React.Fragment>

}
