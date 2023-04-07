import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';
import { FormData } from 'ui/types/FormData';
import { RequiredIcon } from '../RequiredIcon';

type FormFieldName = keyof FormData;
interface PasswordInputProps {
  register: UseFormRegister<FormData>;
  name: FormFieldName;
  placeholder: string;
  label: string;
  errors: FieldErrors<FormData>;
}

export const CustomPasswordInput = ({
  register,
  name,
  placeholder,
  label,
  errors,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl mt={4}>
      <FormLabel htmlFor={name}>
        {label}: <RequiredIcon />
      </FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          id={name}
          {...register(name, { required: true })}
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={''}
            h="1.75rem"
            size="sm"
            onClick={handlePasswordVisibility}
            icon={showPassword ? <FaEye /> : <FaEyeSlash />}
            bg="transparent"
          />
        </InputRightElement>
      </InputGroup>
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </FormControl>
  );
};
