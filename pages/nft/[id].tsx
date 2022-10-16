import React from 'react'
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";


const NFTDropPage = () => {
    // Auth -- 
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()
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
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            <header className='flex item-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                    The{' '}
                    <span className='font-extrabold underline decoration-pink-600/50'>
                        Diddy
                    </span>{' '}
                    NTF Marketplace
                </h1>

                <button 
                    onClick={() => address ? disconnect() : connectWithMetamask()}
                    className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                        {address ? 'Sign Out' : 'Sign In'}
                </button>
            </header>

            <hr className='my-2 border' />
            {address && (
                <p className='text-center text-sm text-rose-400'>You are logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
            )}

            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                <img className='w-80 object-cover pb-10 lg:h-40' src='https://tse4.mm.bing.net/th?id=OIP.9pH7663T6YAA31aSyA1cugHaDt&pid=Api&P=0' alt='' />
                <h1 className='text-3xl font-bold lg:text-4xl lg:font-extrabold'>The Cat Gang BING BONG | NTF Drop</h1>
                <p className='pt-2 text-xl text-green-500'>11/24 nfts claimed</p>
            </div>
            <button className='h-16 bg-red-500 text-white rounded-full mt-10 font-bold'>
                Mint NFT (0.02 eth)
            </button>
        </div>
    </div>
  )
}

export default NFTDropPage