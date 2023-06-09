import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
// include styles from the ui package
// import "ui/styles.css";
import { Roboto_Slab } from 'next/font/google';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';

const roboto = Roboto_Slab({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-roboto',
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`${roboto.variable} font-sans`}>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</main>
	);
}
export default appWithTranslation(MyApp);
