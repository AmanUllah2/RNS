import Balance from './Components/balanceDetails'
import EnableCards from './Components/enableCards'
import DeviceManagement from './Components/deviceManagement'
import LoginRecord from './Components/loginRecord'

export default function Home() {

    return (
        <div className="p-6">
            <div className="flex flex-wrap">
                <div className="md:w-8/12 w-full md:pb-0 md:pr-6">
                    <Balance/>
                    <DeviceManagement/>
                </div>
                <div className="md:w-4/12 mt-4 lg:mt-0 w-full">
                    <EnableCards/>
                    <LoginRecord/>
                </div>
            </div>
        </div>
    )
}
