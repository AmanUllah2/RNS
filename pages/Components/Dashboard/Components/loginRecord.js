export default function Home() {

    return (
        <div className='bg-white mt-4'>
            <p className="text-2xl py-4 px-4 text-gray-800 font-medium">Login Records</p>
            <hr/>
            <div className="flex flex-wrap items-center">
                <div className="lg:w-1/2">
                    <p className="text-lg py-4 px-4 text-gray-800 font-medium">Time</p>
                    <p className="py-4 px-4 text-sm text-gray-800">28/3/2021</p>
                    <p className="py-4 px-4 text-sm text-gray-800">28/3/2021</p>
                    <p className="py-4 px-4 text-sm text-gray-800">28/3/2021</p>
                </div>
                <div className="lg:w-1/4">
                    <p className="text-lg py-4 px-4 text-gray-800 font-medium">IP</p>
                    <p className="py-4 px-4 text-sm text-gray-800">255.255.255.255</p>
                    <p className="py-4 px-4 text-sm text-gray-800">255.255.255.255</p>
                    <p className="py-4 px-4 text-sm text-gray-800">255.255.255.255</p>
                </div>
                <div className="lg:w-1/4">
                    <p className="text-lg py-4 px-4 text-gray-800 font-medium">Location</p>
                    <p className="py-4 px-4 text-sm text-gray-800">Islamabad</p>
                    <p className="py-4 px-4 text-sm text-gray-800">Islamabad</p>
                    <p className="py-4 px-4 text-sm text-gray-800">Islamabad</p>
                </div>
            </div>
        </div>
    )
}
