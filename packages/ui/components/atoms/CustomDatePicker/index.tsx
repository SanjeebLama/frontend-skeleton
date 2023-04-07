import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { FieldErrors } from 'react-hook-form';
import { FormData } from 'ui/types/FormData';

interface CustomDatepickerProps {
  onDateChange: (date: Date | null) => void;
  label: string;
  placeholder: string;
  errors: FieldErrors<FormData>;
}

export const CustomDatepicker = ({
  onDateChange,
  label,
  placeholder,
  errors,
}: CustomDatepickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="w-full max-w-lg relative">
        <FormControl>
          <FormLabel htmlFor="datePicker">{label}</FormLabel>
          <div className="relative">
            <DatePicker
              id={'date'}
              selected={startDate}
              onChange={(date) => handleChange(date)}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText={placeholder}
              className="w-full h-10 text-md py-2 px-4 border rounded shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              calendarClassName="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-lg"
            />
            <span className="absolute right-0 top-0 px-7 py-2">
              <FaCalendarAlt className="h-5 w-4 text-gray-400 dark:text-gray-300" />
            </span>
          </div>
          {errors.date && (
            <span className="text-red-500 text-sm">{errors.date?.message}</span>
          )}
        </FormControl>
      </div>
    </div>
  );
};
