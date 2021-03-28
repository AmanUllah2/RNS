import Chart from './Chart'

export default function Home() {

    return (
        <div className="rounded bg-white pb-10">
            <div className='flex py-4 px-4 items-center justify-between'>
                <p className="text-lg font-bold">Balance Details</p>
                <p className="text-gray-700">Balance Details</p>
            </div>
            <hr />
            <div className='lg:flex items-center px-4'>
                <div className='lg:w-1/4 py-2'>
                    <p>Dummy Text here</p>
                </div>
                <div className='lg:w-1/2'>
                    <Chart />
                </div>
                <div className='lg:w-1/4 py-2'>
                    <p className='lg:text-right'>Dummy Text here</p>
                </div>
            </div>
        </div>
    )
}
