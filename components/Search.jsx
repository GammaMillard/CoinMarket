'use client'

const Search = () => {

    const handleSubmit = (e) => {
        event.preventDefault()
        console.log(e);
    }

  return (
    <form  onSubmit={handleSubmit} action="" className=' flex flex-col gap-6 mb-5'>
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
                        <div className="relative">
                            <input type="checkbox" className="peer
                            
                                    appearance-none cursor-pointer
                                    border border-black rounded-full
                                    checked:border-none checked:bg-black w-12 h-6"/>
                            <span className="peer-checked:left-7
                                    peer-checked:bg-white
                                    transition-all duration-200
                                    pointer-events-none w-4 h-4
                                    block absolute top-1 left-1
                                    rounded-full bg-black"></span>
                        </div>
                    </div>
                    <div className='influencer'>
                        <p>INFLUENCER</p>
                        <div className="relative">
                            <input type="checkbox" className="peer
                                    appearance-none cursor-pointer
                                    border border-black rounded-full
                                    checked:border-none checked:bg-black w-12 h-6"/>
                            <span className="peer-checked:left-7
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

                <input type="submit" value='Search' className='w-full p-2 rounded-sm bg-blue-400 text-white' />
            </form>
  )
}

export default Search