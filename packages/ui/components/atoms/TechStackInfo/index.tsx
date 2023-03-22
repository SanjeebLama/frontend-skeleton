export const TechStackInfo = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 lg:w-1/2'>
            <div className='w-full p-4 border rounded-lg shadow-lg mb-4 md:mb-0'>
                {/* <h2 className="text-xl font-medium text-gray-800 mb-4">Tech Stack</h2> */}
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>Technology</th>
                            <th className='px-4 py-2'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border px-4 py-2'>
                                <span className='text-indigo-600 font-medium'>
                                    Next.js
                                </span>
                            </td>
                            <td className='border px-4 py-2'>
                                A React-based framework for building modern web
                                applications
                            </td>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>
                                <span className='text-indigo-600 font-medium'>
                                    Tailwind CSS
                                </span>
                            </td>
                            <td className='border px-4 py-2'>
                                A utility-first CSS framework for rapidly building
                                custom designs
                            </td>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>
                                <span className='text-indigo-600 font-medium'>
                                    Chakra UI
                                </span>
                            </td>
                            <td className='border px-4 py-2'>
                                A simple and modular component library for React
                                applications
                            </td>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>
                                <span className='text-indigo-600 font-medium'>
                                    Storybook
                                </span>
                            </td>
                            <td className='border px-4 py-2'>
                                An open-source tool for building UI components and
                                pages in isolation
                            </td>
                        </tr>
                        <tr>
                            <td className='border px-4 py-2'>
                                <span className='text-indigo-600 font-medium'>
                                    React Query
                                </span>
                            </td>
                            <td className='border px-4 py-2'>
                                A library for managing and caching server state in
                                React applications
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}