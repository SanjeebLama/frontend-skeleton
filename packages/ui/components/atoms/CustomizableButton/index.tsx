import { Button } from '@chakra-ui/react';
import Link from 'next/link';

type TButton = {
	name: string;
	link: string;
	color: string;
};

export const CustomizableButton = ({ name, link, color }: TButton) => {
	return (
		<Link href={link} className='mr-4' passHref>
			<Button
				bgColor={`${color}`}
				_hover={{ bgColor: `${color}.700` }}
				className='text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-10'
			>
				{name}
			</Button>
		</Link>
	);
};
