import React from 'react'
import Customers from './Customers'
import Search from './Search'

const CoinSelection = () => {
    return (
        <div className='w-[400px] h-screen overflow-hidden text-black border border-blue-400 flex flex-col py-4 pl-4 pr-8 gap-3'>
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
                    <div className="threeDots flex gap-1">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
                <div className="list flex flex-col gap-6 overflow-scroll">

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



                </div>
            </div>
        </div>
    )
}

export default CoinSelection