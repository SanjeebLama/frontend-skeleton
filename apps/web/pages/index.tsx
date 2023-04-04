import { Button, TechStackInfo } from 'ui'
import Link from 'next/link'

export default function Web() {
	return (
		<div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-bold text-gray-800 text-center mb-6'>
				Modern Frontend Skeleton
			</h1>
			<p className='text-lg text-gray-600 mb-10'>
				Built with Turbo repo for streamlined development
			</p>
			<Link href='/docs'>
				<Button />
			</Link>
			<TechStackInfo />
		</div>
	)
}
