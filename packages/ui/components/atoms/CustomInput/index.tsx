import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from 'ui/types/FormData';
import { RequiredIcon } from '../RequiredIcon';

interface InputProps {
  label: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  placeholder: string;
}

export const CustomInput = ({
  label,
  name,
  register,
  errors,
  placeholder,
}: InputProps) => {
  return (
    <FormControl mt={4}>
      <FormLabel htmlFor={name}>
        {label}:
        <RequiredIcon />
      </FormLabel>
      <Input
        type="text"
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </FormControl>
  );
};
