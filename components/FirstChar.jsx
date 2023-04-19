'use client'

const FirstChar = () => {




    return (
        <div className='w-52 h-32 border border-blue-700 flex flex-col'>
            <div className="names">
                <p>NAME</p>
                <div className='date-range'></div>
                <div className='drag-icon'></div>
            </div>
            <div className=" bg-black grow"></div>
        </div>
    )
}

export default FirstChar