import { ChartNoAxesColumn,ArrowUp,ArrowDown,CalendarFold,Utensils,BanknoteArrowUp,ShoppingBag} from 'lucide-react'
import { SiVisa } from 'react-icons/si'
import { Link } from 'react-router'


function Page01() {

    return(
        <>
            <div className="bg-gray-100">
            <div className=" mx-[30px]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col mt-[20px]">
                        <div className="text-[26px] text-[#1f4b61]">All my accounts</div>
                        <div className="text-[14px] text-gray-500">June 10, 2018</div>
                    </div>
                    <Link to='page02/'>
                        <ChartNoAxesColumn />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center m-[30px] text-gray-200">
                <div className=" bg-gradient-to-r from-[#2D6581] to-[#133647] rounded-[12px] px-[20px] pb-[20px] max-w-[1000px] w-screen shadow">
                <div className="flex justify-between">
                    <SiVisa className="text-[3rem]"/>
                    <div className="text-[12px] text-lime-200 mt-[30px]">Available Balance</div>
                </div>
                <div className="flex justify-between">
                    <img src='public/chip.png' className="flex flex-col self-center w-10"/>
                    <div className="flex gap-[10px]">
                    <div className="flex flex-col self-center text-center text-white bg-[#0a222e] rounded-[60%] w-6 ">$</div>
                    <div className="text-[2rem]">7,392.00</div>  
                    </div>
                    
                </div>
                <div className="text-center text-[24px] text-[#85A5B8] my-[10px] flex justify-between">
                    <div>42012</div>
                    <div>3049</div>
                    <div>2800</div>
                    <div>9815</div>
                </div>
                <div className="flex justify-between text-[12px]">
                    <div>EXPIRE - 02/22</div>
                    <div>CVC CODE - 230</div>
                </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full "></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full "></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full "></div>
                </div>
            </div>
            <div className="flex justify-center m-[30px]">
                <div className="bg-white shadow rounded-[12px] p-[20px] w-screen">
                <div className="flex justify-between relative">
                    <div className="flex flex-col items-center">
                        <div className="border-solid border-[1px] border-gray-400 rounded-[30px] px-[15px] text-[12px]">Income</div>
                        <div className="flex justify-center gap-[5px] text-green-600 ">
                            <ArrowDown className="w-4 flex flex-col self-centers stroke-3"/>
                            <div>$9,302.00</div>                
                        </div>
                    </div>
                    <div className="flex flex-col items-center">          
                        <div className="border-solid border-[1px] border-gray-400 rounded-[30px] px-[15px] text-[12px]">Expense</div>  
                        <div className="flex justify-center gap-[5px] text-red-600">
                            <ArrowUp className="w-4 flex flex-col self-center stroke-3"/>
                            <div>$2,790.00</div>                
                        </div>             
                    </div>
                    <div className="absolute left-1/2 h-full w-[1px] bg-gray-300" />
                </div>
                </div>
            </div>
            <div className="flex justify-between mx-[30px]">
                <div className="text-[22px] text-[#668595]">Details of movements</div>
                <CalendarFold className="flex flex-col self-center"/>
            </div>
            <div className="flex justify-center mx-[30px] mt-[15px]">
                <div className="bg-white shadow rounded-[12px] p-[20px] w-screen">
                <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                    <Utensils className="flex flex-col self-center"/>
                    <div>
                        <div>Restaurant Manhattan</div>
                        <div className="text-[12px] text-gray-500">June 10, 2018</div>
                    </div>
                    </div>
                    <div className="flex items-center text-red-600">
                    <div>$170</div>
                    <ArrowUp className="w-4 stroke-3 mx-[5px]"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center mx-[30px] mt-[15px]">
                <div className="bg-white shadow rounded-[12px] p-[20px] w-screen">
                <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                    <BanknoteArrowUp className="flex flex-col self-center"/>
                    <div>
                        <div>Salary Deposit</div>
                        <div className="text-[12px] text-gray-500">June 1, 2018</div>
                    </div>
                    </div>
                    <div className="flex items-center text-green-600">
                    <div>$1,200</div>
                    <ArrowDown className="w-4 stroke-3 mx-[5px]"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center mx-[30px] mt-[15px]">
                <div className="bg-white shadow rounded-[12px] p-[20px] w-screen">
                <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                    <ShoppingBag className="flex flex-col self-center"/>
                    <div>
                        <div>Central Market</div>
                        <div className="text-[12px] text-gray-500">May 28, 2018</div>
                    </div>
                    </div>
                    <div className="flex items-center text-red-600">
                    <div>$50</div>
                    <ArrowUp className="w-4 stroke-3 mx-[5px]"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center mx-[30px] mt-[15px]">
                <div className="bg-white shadow rounded-[12px] p-[20px] w-screen mb-[15px]">
                <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                    <BanknoteArrowUp className="flex flex-col self-center"/>
                    <div>
                        <div>Salary Deposit</div>
                        <div className="text-[12px] text-gray-500">May 1, 2018</div>
                    </div>
                    </div>
                    <div className="flex items-center text-green-600">
                    <div>$1,200</div>
                    <ArrowDown className="w-4 stroke-3 mx-[5px]"/>
                    </div>
                </div>
                </div>
            </div>
            </div>        
        </>
    )
}

export default Page01