import React from 'react'
import Customers from './Customers'
import Search from './Search'

const CoinSelection = () => {
    return (
        <div className='w-[400px] h-screen overflow-hidden text-black border border-grayBorder flex flex-col py-4 pl-4 pr-8 gap-3'>
            <div className='flex mb-10'>
                <div className="menu">
                    <p>asdasd</p>
                </div>
                <div className="lang">
                    <p>asdasd</p>

                </div>
            </div>

            <Search />


            <div className='top-holder flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <p>TOP COSTUMERS</p>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col h-96 gap-6 overflow-auto scrollbar-hide">

                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <Customers />
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-blue-700 w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default CoinSelection