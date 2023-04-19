import React from 'react'

const CoinSelection = () => {
    return (
        <div className='w-[500px] h-screen text-black border border-blue-400 flex flex-col'>
            <div>
                <div className="menu">

                </div>
                <div className="lang">

                </div>
            </div>
            <form action="">
                <label htmlFor="location">LOCATION</label>
                <input type="text" id='location' name='location' placeholder='Enter Locations' />
                <label htmlFor="date">DATE RANGE</label>
                <input type="text" id='date' name='date' placeholder='Select Dates' />

                <div className="vip-influencer">
                    <div className='vip'>
                        <p>VIP</p>
                        <div className="selector"></div>
                    </div>
                    <div className='influencer'>
                        <p>INFLUENCER</p>
                        <div className="selector"></div>
                    </div>
                </div>
                <label htmlFor="company">COMPANY TYPE</label>
                <input type="text" /><input type="text" />

                <input type="submit" value='Search' />
            </form>

            <div className="w-full h-px bg-black"></div>

            <div className='top-holder'>
                <div>
                    <p>TOP COSTUMERS</p>
                    <div className="threeDots"></div>
                </div>
                <div className="list">
                    
                    <div className='flex items-center gap-3'>
                        <img src="" alt="" />
                        <p>Ronald Richards</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CoinSelection