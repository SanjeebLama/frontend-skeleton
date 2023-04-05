import { CustomizableButton, TechStackInfo } from 'ui';
import { Flex } from '@chakra-ui/react';

export default function Web() {
	return (
		<div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-bold text-gray-800 text-center mb-6'>
				Modern Frontend Skeleton
			</h1>
			<p className='text-lg text-gray-600 mb-10'>
				Built with Turbo repo for streamlined development
			</p>
			<Flex>
				<CustomizableButton
					name='Documentation'
					link='https://www.notion.so/wesionary-team/Frontend-Skeleton-Documentation-adac91e528a0498fb3e9316c86f3183b'
					color='gray.500'
				/>
				<CustomizableButton name='Playground' link='/playground' color='teal' />
			</Flex>
			<TechStackInfo />
		</div>
	);
}
