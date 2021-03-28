import { useEffect, useState, useContext } from "react"
import { useRouter } from 'next/router'
import Navbar from './Components/navbar'
import Dashboard from './Components/Dashboard/index'
import UserContext from '../pages/Store/context'

export default function Home() {
  const data = useContext(UserContext)
  const router = useRouter()
  const [loader, setLoader] = useState(false)

  const verifyUser = () => {
    let x = localStorage.getItem("token")
    if (x === "" || x === null) {
      router.push('/login')
    } else {
      setLoader(true)
    }
  }

  useEffect(() => {
    verifyUser();    
    console.log(data)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      { loader &&
        <div>
          <Navbar />
          <Dashboard />
          {/* To Display data that is coming from store */}
          { !!data &&
            <p className="text-red-500 mt-5 text-center">This data is coming from Store: {data.data}</p>
          }
        </div>
      }
    </div>
  )
}
