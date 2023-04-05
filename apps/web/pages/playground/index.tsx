import {
	Box,
	Heading,
	Text,
	Flex,
	Image,
	Center,
	HStack,
} from '@chakra-ui/react';

const examples = [
	{
		id: '1',
		heading: 'React Form Example',
		description: 'Simple form with form validation using the Zod library.',
		url: '/playground/react-form',
		tech: 'react-hook-form, zod',
		image: '/static/assets/react-hook-form.png',
	},
	{
		id: '2',
		heading: 'i18n Example',
		description:
			'Internationalization in a Next.js app using the next-i18next library.',
		url: '/ja/playground/react-form',
		tech: 'next-i18next, react-i18n, i18next',

		image: '/static/assets/i18-example.png',
	},
	{
		id: '3',
		heading: 'React Query Example',
		description:
			'Simple fetch example using react-query library in a Next.js app.',
		url: '/playground/users',
		tech: 'react-query',

		image: '/static/assets/react-query-fetch.png',
	},
];

export default function PlaygroundIndexPage() {
	const colors = ['black', 'blue.500', 'green.500', 'purple.500'];

	return (
		<Box bg='gray.100' minH='100vh' py={10}>
			<Box mx='auto'>
				<Heading as='h1' size='2xl' mb={4} textAlign='center'>
					Playground
				</Heading>
				<Text fontSize='xl' color='gray.600' mb={10} textAlign='center'>
					Get ideas to use the tech stack here.
				</Text>
				<Flex flexWrap='wrap'>
					{examples.map((example) => (
						<Center
							w={{ base: '100%', md: 'calc(100%/3 - 1rem)' }}
							p={4}
							key={example.id}
						>
							<Box
								w='xs'
								rounded={'sm'}
								my={5}
								mx={[0, 5]}
								overflow={'hidden'}
								bg='white'
								border={'1px'}
								borderColor='black'
							>
								<Box h={'200px'} borderBottom={'1px'} borderColor='black'>
									<Image
										src={example.image}
										roundedTop={'sm'}
										objectFit='fill'
										h='full'
										w='full'
										alt={example.heading}
									/>
								</Box>
								<Box p={4}>
									<Flex>
										{example.tech.split(',').map((tech, index) => (
											<Box
												key={index}
												bg={colors[index % colors.length]}
												color='white'
												display='inline-block'
												px={2}
												py={1}
												mb={2}
												mr={2} // Add margin between boxes
											>
												<Text fontSize='xs' fontWeight='medium'>
													{tech}
												</Text>
											</Box>
										))}
									</Flex>
									<Heading
										color={'black'}
										fontSize={'2xl'}
										noOfLines={1}
										mt={1}
									>
										{example.heading}
									</Heading>
									<Text color={'gray.500'} noOfLines={3} my={2}>
										{example.description}
									</Text>
								</Box>
								<HStack borderTop={'1px'} color='black'>
									<Flex
										p={4}
										alignItems='center'
										justifyContent={'space-between'}
										roundedBottom={'sm'}
										cursor={'pointer'}
										w='full'
									>
										<Text fontSize='md' fontWeight='bold'>
											<a
												href={example.url}
												className='text-indigo-600 hover:text-indigo-700'
											>
												View Example &gt;
											</a>
										</Text>
									</Flex>
								</HStack>
							</Box>
						</Center>
					))}
				</Flex>
			</Box>
		</Box>
	);
}
