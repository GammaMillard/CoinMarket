import React from 'react'

const UserInfo = () => {
	return (
		<div className='w-full border border-grayBorder flex justify-between p-4 items-center'>
			<div className='relative'>
				<p className='tracking-tighter text-blue-700'>CoinMarket</p>
				<p className='absolute -top-2 -z-10 text-3xl text-blue-300 inset-x-8'>C</p>
			</div>
			<div className='flex items-center gap-3 ' >
				<p>Isabella F.</p>
				<div className="bg-black w-8 h-8 rounded-full"></div>
			</div>
		</div>
	)
}

export default UserInfo