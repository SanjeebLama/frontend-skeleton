import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack,
} from '@chakra-ui/react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
	CustomInput,
	CustomPasswordInput,
	CustomSelect,
	FormData,
	CustomDatepicker,
	RequiredIcon,
} from 'ui';

type TCountryOptions = { value: string; label: string };

const countryOptions: TCountryOptions[] = [
	{ value: 'Nepal', label: 'Nepal' },
	{ value: 'India', label: 'India' },
];

const ReactForm = () => {
	const { t } = useTranslation();

	const schema: ZodType<FormData> = z
		.object({
			firstName: z
				.string()
				.min(2, 'First name should be at least 2 characters')
				.max(10, 'First name should not exceed 10 characters'),
			lastName: z
				.string()
				.min(2, 'Last name should be at least 2 characters')
				.max(10, 'Last name should not exceed 10 characters'),
			email: z.string().email('Please enter a valid email address'),
			country: z.string(),
			phone: z
				.number()
				.min(1000000000, 'Mobile Number must be 10 digit long')
				.max(9999999999, 'Mobile Number must be 10 digit long'),
			password: z
				.string()
				.min(5, 'Password should be at least 5 characters')
				.max(20, 'Password should not exceed 20 characters'),
			confirmPassword: z.string(),
			date: z.date(),
		})
		.refine((data) => data.confirmPassword === data.password, {
			message: 'Password do not match',
			path: ['confirmPassword'],
		});

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm<FormData>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	watch('password');

	const handleDateChange = (date: Date | null) => {
		console.log('Date : ', date);
		setValue('date', date);
	};

	const onSubmitData = (data: FormData) => {
		alert(
			` First Name: ${data.firstName},\n Last Name: ${data.lastName},\n Email: ${data.email},\n Mobile Number: ${data.phone},\n Password: ${data.password},\n Date: ${data.date} \n Country:${data.country}`
		);
	};

	return (
		<VStack spacing={4} align='stretch' maxW='500px' m='auto'>
			<Heading as='h1' size='lg' fontWeight='bold' mt={6}>
				{t('title')}
			</Heading>
			<form onSubmit={handleSubmit(onSubmitData)}>
				<CustomInput
					label={t('form.firstName')}
					name='firstName'
					register={register}
					errors={errors}
					placeholder={t('Enter your first name')}
				/>

				<CustomInput
					label={t('form.lastName')}
					name='lastName'
					register={register}
					errors={errors}
					placeholder={t('Enter your last name')}
				/>

				<CustomDatepicker
					onDateChange={handleDateChange}
					label={t('form.datePicker')}
					placeholder={t('Select a date')}
					errors={errors}
				/>

				<FormControl id='phone' mt={5}>
					<FormLabel>
						{t('form.phone')}: <RequiredIcon />
					</FormLabel>
					<Input
						type='number'
						id='phone'
						placeholder={t('Enter your phone number') || ''}
						{...register('phone', {
							required: true,
							setValueAs: (v) => (v === '' ? undefined : parseInt(v, 10)),
						})}
					/>
					{errors.phone && (
						<span className='text-red-500 text-sm'>
							{errors.phone?.message}
						</span>
					)}
				</FormControl>

				<CustomInput
					label={t('form.email')}
					name='email'
					register={register}
					errors={errors}
					placeholder={t('Your Email Address')}
				/>

				<CustomPasswordInput
					register={register}
					name='password'
					placeholder={t('Enter your password')}
					label={t('form.password')}
					errors={errors}
				/>

				<CustomPasswordInput
					register={register}
					name='confirmPassword'
					placeholder={t('Re-enter your password')}
					label={t('form.confirmPassword')}
					errors={errors}
				/>

				<CustomSelect
					options={countryOptions}
					register={register}
					name='country'
					label={t('form.country')}
					placeholder={t('form.selectCountry') || undefined}
				/>

				<Button type='submit' colorScheme='teal' my={6} w='100%'>
					{t('form.submit')}
				</Button>
			</form>
		</VStack>
	);
};

export default ReactForm;

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
