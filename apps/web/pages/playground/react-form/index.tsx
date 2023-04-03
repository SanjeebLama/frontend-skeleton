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
import { useForm, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent } from 'react';
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

const countryOptions = [
	{ value: 'np', label: 'Nepal' },
	{ value: 'in', label: 'India' },
];

const ReactForm = () => {
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
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const { field } = useController({ name: 'country', control });

	const handleCountryChange = (option: ChangeEvent<HTMLSelectElement>) => {
		field.onChange(option.value);
	};

	const onSubmitData = (data: FormData) => {
		console.log(
			`First Name: ${data.firstName}, Last Name: ${data.lastName}, Email: ${data.email}, Password: ${data.password},  Age: ${data.age}, Country:${data.country}`
		);
	};
	return (
		<VStack spacing={4} align='stretch' maxW='500px' m='auto'>
			<Heading as='h1' size='lg' fontWeight='bold' my={6}>
				My Form
			</Heading>
			<form onSubmit={handleSubmit(onSubmitData)}>
				<FormControl>
					<FormLabel htmlFor='firstName'>First Name:</FormLabel>
					<Input type='text' id='firstName' {...register('firstName')} />
					{errors.firstName && (
						<span className='text-red-500 text-sm'>
							{errors.firstName?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='lastName'>Last Name:</FormLabel>
					<Input type='text' id='lastName' {...register('lastName')} />
					{errors.lastName && (
						<span className='text-red-500 text-sm'>
							{errors.lastName?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='age'>Age:</FormLabel>
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
					<FormLabel htmlFor='email'>Email:</FormLabel>
					<Input type='text' id='email' {...register('email')} />
					{errors.email && (
						<span className='text-red-500 text-sm'>
							{errors.email?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='password'>Password:</FormLabel>
					<Input type='password' id='password' {...register('password')} />
					{errors.password && (
						<span className='text-red-500 text-sm'>
							{errors.password?.message}
						</span>
					)}
				</FormControl>
				<FormControl mt={5}>
					<FormLabel htmlFor='confirmPassword'>Confirm Password:</FormLabel>
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
				{/* <FormControl mt={5}>
					<FormLabel htmlFor='country'>Country:</FormLabel>
					<Select
						placeholder='Select country'
						value={countryOptions.find(({ value }) => value === field.value)}
						{...register('country')}
						onChange={handleCountryChange}
					>
						{countryOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
				</FormControl> */}
				<Button type='submit' colorScheme='teal' mt={6} w='100%'>
					Submit
				</Button>
			</form>
		</VStack>
	);
};

export default ReactForm;
