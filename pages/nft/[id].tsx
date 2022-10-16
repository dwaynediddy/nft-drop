import React from 'react'

const NFTDropPage = () => {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-yellow-400 to purple-600 p-2 rounded-xl'>
                    <img 
                            className='w-44 rounded-xl object-cover lg:height-96 lg:w-72'
                            src='https://tse4.mm.bing.net/th?id=OIP.umkjnYo8facUE9mYfjCV9AAAAA&pid=Api&P=0' 
                            alt='' 
                        />
                </div>
                <div className='space-y-2 text-center p-5'>
                    <h1 className='text-4xl font-bold text-white tracking-wider uppercase'>Diddys Kittys</h1>
                    <h2 className='text-white'>A collection of the best Maos around</h2>
                </div>
            </div>
    </div>
        <div>
            <header>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                    The{' '}
                    <span className='font-extrabold underline decoration-pink-600/50'>
                        Diddy
                    </span>{' '}
                    NTF Marketplace
                </h1>

                <button className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>Sign In</button>
            </header>
        </div>
    </div>
  )
}

export default NFTDropPage