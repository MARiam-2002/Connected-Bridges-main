import React from 'react';
import type { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import TextareaInput from '../inputs/TextareaInput';
import ListInput from '../inputs/ListInput';
import BaseInput from '../inputs/BaseInput';

type FormBuilderProps<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    placeholder: string;
    type: 'text' | 'textarea' | 'select';
    isRequired?: boolean;
    options?: {value: string | number; label: string}[];
    cols?: string;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    value?: string;
}

export default function FormBuilder<T extends FieldValues>({
    cols, 
    id, 
    label, 
    placeholder, 
    type, 
    isRequired, 
    options,
    register,
    errors,
    value = ''
}: FormBuilderProps<T>) {

    const fieldError = errors[id];

    return <React.Fragment>

        <div className={`${cols || 'col-span-1'}`}>

            {type === 'text' && (
                <BaseInput 
                    id={id} 
                    value={value} 
                    label={label} 
                    placeholder={placeholder}  
                    isRequired={isRequired}
                    register={register}
                    error={fieldError?.message as string}
                />
            )}
            {type === 'textarea' && (
                <TextareaInput 
                    id={id} 
                    value={value} 
                    label={label} 
                    placeholder={placeholder}  
                    isRequired={isRequired}
                    register={register}
                    error={fieldError?.message as string}
                />
            )}
            {type === 'select' && (
                <ListInput 
                    id={id} 
                    value={value} 
                    label={label} 
                    placeholder={placeholder}  
                    options={options || []} 
                    isRequired={isRequired}
                    register={register}
                    error={fieldError?.message as string}
                />
            )}

        </div>

    </React.Fragment>

}
