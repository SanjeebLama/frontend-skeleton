import { Select, FormControl, FormLabel } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from 'ui/types/FormData';

type SelectOption = {
  label: string;
  value: string;
};

type FormFieldName = keyof FormData;

type SelectProps = {
  options: SelectOption[];
  register: UseFormRegister<FormData>;
  name: FormFieldName;
  label: string;
  placeholder?: string;
};

export const CustomSelect = ({
  options,
  register,
  name,
  label,
  placeholder,
}: SelectProps) => {
  const { t } = useTranslation();

  return (
    <FormControl mt={5}>
      <FormLabel htmlFor={name}>{label}:</FormLabel>
      <Select
        placeholder={placeholder || undefined}
        {...register(name)}
        id={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
