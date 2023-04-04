import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	VStack,
} from '@chakra-ui/react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	age: number;
	confirmPassword: string;
	country: string;
};

type TCountryOptions = { value: string; label: string };

const countryOptions: TCountryOptions[] = [
	{ value: 'Nepal', label: 'Nepal' },
	{ value: 'India', label: 'India' },
];

const ReactForm = () => {
	const { t } = useTranslation();

	const schema: ZodType<FormData> = z
		.object({
			firstName: z.string().min(2).max(10),
			lastName: z.string().min(2).max(10),
			email: z.string().email(),
			age: z.number().min(18).max(50),
			password: z.string().min(5).max(20),
			confirmPassword: z.string().min(5).max(20),
			country: z.string(),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Password donot match',
			path: ['confirmPassword'],
		});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmitData = (data: FormData) => {
		alert(
			` First Name: ${data.firstName},\n Last Name: ${data.lastName},\n Email: ${data.email},\n Password: ${data.password},\n Age: ${data.age},\n Country:${data.country}`
		);
	};

	return (
		<VStack spacing={4} align='stretch' maxW='500px' m='auto'>
			<Heading as='h1' size='lg' fontWeight='bold' my={6}>
				{t('title')}
			</Heading>
			<form onSubmit={handleSubmit(onSubmitData)}>
				<FormControl>
					<FormLabel htmlFor='firstName'>{t('form.firstName')}:</FormLabel>
					<Input type='text' id='firstName' {...register('firstName')} />
					{errors.firstName && (
						<span className='text-red-500 text-sm'>
							{errors.firstName?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='lastName'>{t('form.lastName')}:</FormLabel>
					<Input type='text' id='lastName' {...register('lastName')} />
					{errors.lastName && (
						<span className='text-red-500 text-sm'>
							{errors.lastName?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='age'>{t('form.age')}:</FormLabel>
					<Input
						type='number'
						id='age'
						{...register('age', { valueAsNumber: true })}
					/>
					{errors.age && (
						<span className='text-red-500 text-sm'>{errors.age?.message}</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='email'>{t('form.email')}:</FormLabel>
					<Input type='text' id='email' {...register('email')} />
					{errors.email && (
						<span className='text-red-500 text-sm'>
							{errors.email?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='password'>{t('form.password')}:</FormLabel>
					<Input type='password' id='password' {...register('password')} />
					{errors.password && (
						<span className='text-red-500 text-sm'>
							{errors.password?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='confirmPassword'>
						{t('form.confirmPassword')}:
					</FormLabel>
					<Input
						type='password'
						id='confirmPassword'
						{...register('confirmPassword')}
					/>
					{errors.confirmPassword && (
						<span className='text-red-500 text-sm'>
							{errors.confirmPassword?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='country'>{t('form.country')}:</FormLabel>
					<Select
						placeholder={t('form.selectCountry') || undefined}
						{...register('country')}
						id='country'
					>
						{countryOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl>
				<Button type='submit' colorScheme='teal' mt={6} w='100%'>
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
