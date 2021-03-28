import { useState } from "react"
import { useRouter } from 'next/router'

export default function Home() {
    const [drop, setDrop] = useState(false)
    const router = useRouter()

    const logout = () => {
        localStorage.removeItem("token");
        router.push('/login')
    }

    return (
        <div className="h-16 bg-black w-full">
            <div className='flex items-center h-full justify-between text-white px-10 text-lg font-medium'>
                <p>Logo</p>
                <ul className="w-1/2 justify-center hidden lg:flex">
                    <li>Link1</li>
                    <li className='pl-10'>Link2</li>
                    <li className='pl-10'>Link3</li>
                    <li className='pl-10'>Link4</li>
                </ul>
                <div>
                    <img onClick={() => setDrop(!drop)} className="h-10 cursor-pointer w-10 rounded-full" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt="" />
                    {drop &&
                        <ul onClick={logout} className="bg-white cursor-pointer absolute right-10 mt-5 border-gray-600 border rounded-md">
                            <ul className="lg:hidden">
                                <li className="p-2 text-gray-700">Link1</li>
                                <li className="p-2 text-gray-700">Link2</li>
                                <li className="p-2 text-gray-700">Link3</li>
                                <li className="p-2 text-gray-700">Link4</li>
                            </ul>
                            <li className="p-2 text-gray-700">Logout</li>                            
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}
