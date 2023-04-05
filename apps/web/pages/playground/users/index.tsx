import { useQuery } from '@tanstack/react-query';
import { Box, Heading } from '@chakra-ui/react';

const UsersList = () => {
	const { data, isLoading } = useQuery(['users'], () =>
		fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
			res.json()
		)
	);

	return (
		<Box mt={20} ml={20} mr={20}>
			<Heading as='h1' size='lg' mb={4}>
				Welcome, this is an example of React Query
			</Heading>
			<Heading as='h2' size='md' mb={4}>
				List of User Names
			</Heading>
			{isLoading && <Box>Loading...</Box>}
			{data && (
				<Box className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{data.slice(0, 9).map(({ id, name, email }: any, index: number) => (
						<Box
							key={id}
							className={`bg-${
								index % 2 === 0 ? 'gray-200' : 'gray-100'
							} rounded-lg shadow-md p-4`}
						>
							<h3 className='text-lg font-medium mb-2'>{name}</h3>
							<p className='text-gray-500'>{email}</p>
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
};

export default UsersList;
