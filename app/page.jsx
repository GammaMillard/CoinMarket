import Image from 'next/image'
import { Inter } from 'next/font/google'
import CoinSelection from '@/components/CoinSelection'
import UserInfo from '@/components/UserInfo'
import FirstChar from '@/components/FirstChar'



const inter = Inter({ subsets: ['latin'] })




export default async function Home() {


	return (
		<main className=''>
			<div className="wrapper flex">
				<CoinSelection />
				<section className='w-full'>
					<UserInfo />
					<div className="data-holder border border-green-300 p-4">
						<div className="actualdata w-full h-full border border-pink-400 flex flex-wrap gap-7" >
							<div className='w-52 h-32 border border-blue-700 flex flex-col'>
								<div className="flex justify-between p-2">
									<p>NAME</p>
									<div className='flex gap-2'>
										<div className='date-range'></div>
										<div className='drag-icon'></div>
									</div>
								</div>
								<div className=" bg-black grow"></div>
							</div>
							<div className='w-52 h-32 border border-red-700 flex flex-col'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
								<div className=" bg-black grow"></div>
							</div>
							<div className='w-52 h-32 border border-yellow-700'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border border-orange-700'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border border-purple-700'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border border-green-700'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>

						</div>
					</div>
				</section>
			</div>




		</main>
	)
}
