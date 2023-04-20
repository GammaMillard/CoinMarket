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
					<div className="data-holder border border-grayBorder p-4">
						<div className="actualdata w-full h-full border bordergrayBorderborder-grayBorder flex flex-wrap gap-7" >
							<div className='w-52 h-32 border bordergrayBorderborder-grayBorder flex flex-col'>
								<div className="flex justify-between p-2">
									<p>NAME</p>
									<div className='flex gap-2'>
										<div className='date-range'></div>
										<div className='drag-icon'></div>
									</div>
								</div>
								<div className=" bg-black grow"></div>
							</div>
							<div className='w-52 h-32 border bordegrayBorderborder-grayBorder flex flex-col'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
								<div className=" bg-black grow"></div>
							</div>
							<div draggable className='w-52 h-32 border border-ygrayBorderborder-grayBorder'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border  border-grayBorder'>
								<div className="names">
									<p>Millard</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border border-pgrayBorderborder-grayBorder'>
								<div className="names">
									<p>NAME</p>
									<div className='date-range'></div>
									<div className='drag-icon'></div>
								</div>
							</div>
							<div className='w-52 h-32 border border-grayBorder'>
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
