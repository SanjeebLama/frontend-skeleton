import type { AppProps } from 'next/app'
import '../styles/globals.css'
// include styles from the ui package
// import "ui/styles.css";
import { Roboto_Slab } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'

const roboto = Roboto_Slab({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-roboto',
})

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`${roboto.variable} font-sans`}>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</main>
	)
}
