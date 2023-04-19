import React from 'react'

const CoinSelection = () => {
    return (
        <div className='w-[500px] h-screen text-black border border-blue-400 flex flex-col py-4 pl-4 pr-8 gap-3'>
            <div className='flex mb-10'>
                <div className="menu">
                    <p>asdasd</p>
                </div>
                <div className="lang">
                    <p>asdasd</p>

                </div>
            </div>
            <form action="" className=' flex flex-col gap-6 mb-5
        '>
                <div className="flex flex-col gap-3">
                    <label htmlFor="location">LOCATION</label>
                    <input className='py-2 pl-10 pr-2 border border-gray-400 rounded-lg' type="text" id='location' name='location' placeholder='Enter Locations' />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="date">DATE RANGE</label>
                    <input className='py-2 pl-10 pr-2 border border-gray-400 rounded-lg' type="text" id='date' name='date' placeholder='Select Dates' />
                </div>

                <div className="vip-influencer flex gap-10">
                    <div className='vip'>
                        <p>VIP</p>
                        <div class="relative">
                            <input type="checkbox" class="peer
                                    appearance-none cursor-pointer
                                    border border-black rounded-full
                                    checked:border-none checked:bg-black w-12 h-6"/>
                            <span class="peer-checked:left-7
                                    peer-checked:bg-white
                                    transition-all duration-200
                                    pointer-events-none w-4 h-4
                                    block absolute top-1 left-1
                                    rounded-full bg-black"></span>
                        </div>
                    </div>
                    <div className='influencer'>
                        <p>INFLUENCER</p>
                        <div class="relative">
                            <input type="checkbox" class="peer
                                    appearance-none cursor-pointer
                                    border border-black rounded-full
                                    checked:border-none checked:bg-black w-12 h-6"/>
                            <span class="peer-checked:left-7
                                    peer-checked:bg-white
                                    transition-all duration-200
                                    pointer-events-none w-4 h-4
                                    block absolute top-1 left-1
                                    rounded-full bg-black"></span>
                        </div>
                    </div>
                </div>
                <label htmlFor="company">COMPANY TYPE</label>
                <div className="flex gap-10 text-black">
                    <select name='x' className=''>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                    <select name='y' className=''>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                </div>

                <input type="submit" value='Search' className='w-full p-2 rounded-md bg-blue-400 text-white'/>
            </form>

            <div className="w-full h-px bg-black"></div>

            <div className='top-holder flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <p>TOP COSTUMERS</p>
                    <div className="threeDots flex gap-1">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
                <div className="list flex flex-col gap-6">

                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <div className="bg-black w-12 h-12 rounded-full"></div>
                        <p>Ronald Richards</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CoinSelection