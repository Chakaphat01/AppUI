import { AlignLeft,CalendarFold,MoveDown,MoveUp,Utensils,BanknoteArrowUp,ShoppingBag,ChevronDown,HandCoins } from "lucide-react";
import { Link } from "react-router";
function Page02() {
    return(
        <div>
            <div className="relative bg-gray-100">
                <div>
                    <div className="flex flex-col bg-gradient-to-r from-[#2D6581] to-[#133647] w-screen shadow-2xl ">
                        <div className="flex justify-between pt-[30px] mx-[30px] text-white">
                            <Link to='/'>
                                <AlignLeft/>
                            </Link>
                            <CalendarFold/>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[12px] text-[#b6d095]">Available Balance</div>
                            <div className="flex gap-[5px] text-white">
                                <div className="flex flex-col self-center text-center text-white bg-[#0a222e] rounded-[60%] w-6 ">$</div>                               
                                <div className="text-[2rem]">7,392.00</div>
                            </div>
                            <div className="text-[12px] text-gray-400">June 9, 2018</div>   
                            <div className="mb-[70px] mt-[10px] rounded-[5px] bg-gradient-to-r from-[#2D6581] to-[#133647] shadow w-[80%] p-[10px] text-white ">
                                <div className="text-[20px] flex justify-between text-[#85A5B8] pb-[10px] mx-[10px]">
                                    <div>42012</div>
                                    <div>3049</div>
                                    <div>2800</div>
                                    <div>9815</div>
                                </div>
                                <div className="flex justify-between text-[12px] text-gray-200 mx-[10px] ">
                                    <div>EXPIRE - 02/22</div>
                                    <div>CVC CODE - 230</div>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
                <div className="flex  -mt-[75px] ">
                        <div className="bg-white shadow rounded-[12px] p-[20px] px-[35px] m-[30px] w-screen ">
                            <div className="flex justify-between relative">
                                <div className="flex flex-col items-center">
                                    <div className="border-solid border-1 border-gray-400 rounded-[30px] px-[15px] text-[12px]">Income</div>
                                    <div className="flex justify-center gap-[5px] text-green-600 ">
                                        <MoveDown className="w-3 flex flex-col self-centers stroke-4"/>
                                        <div>$9,302.00</div>                
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">          
                                    <div className="border-solid border-1 border-gray-400 rounded-[30px] px-[15px] text-[12px]">Expense</div>  
                                    <div className="flex justify-center gap-[5px] text-red-600">
                                        <MoveUp className="w-3 flex flex-col self-center stroke-4"/>
                                        <div>$2,790.00</div>                
                                    </div>             
                                </div>
                                <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300" />
                            </div>
                        </div>
                </div>
                
                <div className="flex justify-between items-end mx-[30px]">
                    <div className="text-[22px] text-[#668595]">Details of movements</div>
                    <div className="flex gap-[5px]">
                        <div className="text-[#4b4d4e] text-[12px]">Weekly</div>
                        <ChevronDown/>    
                    </div>  
                </div>
                <div className="w-screen">
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
                        <MoveUp className="w-3 stroke-3"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center mx-[30px] mt-[15px]">
                    <div className="bg-white shadow rounded-[12px] p-[20px] w-screen">
                    <div className="flex justify-between">
                        <div className="flex gap-[15px]">
                        <HandCoins className="flex flex-col self-center"/>
                        <div>
                            <div>Salary Deposit</div>
                            <div className="text-[12px] text-gray-500">June 7, 2018</div>
                        </div>
                        </div>
                        <div className="flex items-center text-green-600">
                        <div>$800</div>
                        <MoveDown className="w-3 stroke-3"/>
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
                            <div className="text-[12px] text-gray-500">June 6, 2018</div>
                        </div>
                        </div>
                        <div className="flex items-center text-red-600">
                        <div>$50</div>
                        <MoveUp className="w-3 stroke-3"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center mx-[30px] mt-[15px]">
                    <div className="bg-white shadow rounded-[12px] p-[20px] w-screen ">
                        <div className="flex justify-between">
                            <div className="flex gap-[15px]">
                                <BanknoteArrowUp className="flex flex-col self-center"/>
                                <div>
                                    <div>Salary Deposit</div>
                                    <div className="text-[12px] text-gray-500">June 1, 2018</div>
                                </div>
                            </div>
                            <div className="flex items-center text-green-600">
                                <div>$4,200</div>
                                <MoveDown className="w-3 stroke-3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-[30px] mt-[15px]">
                    <div className="bg-white shadow rounded-[12px] p-[20px] w-screen mb-[15px]">
                    <div className="flex justify-between">
                        <div className="flex gap-[15px]">
                        <ShoppingBag className="flex flex-col self-center"/>
                        <div>
                            <div>Central Market</div>
                            <div className="text-[12px] text-gray-500">June 1, 2018</div>
                        </div>
                        </div>
                        <div className="flex items-center text-red-600">
                        <div>$37</div>
                        <MoveUp className="w-3 stroke-3"/>
                        </div>
                    </div>
                    </div>
                </div>   
                </div>   
            </div>
        </div>
    )
};

export default Page02;