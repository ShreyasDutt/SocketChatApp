import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { MessageCircleMore, UserRoundPlus, UsersRound } from "lucide-react"
import { Button } from "./ui/button"
import { MobileSidebar } from "./mobileSidebar"

const AppSidebar = () => {

    const sidebarItems = [
        {name: 'Chats', icon:<MessageCircleMore />},
        {name: 'People', icon:<UsersRound />},
    ]

    return (
        <>
        <div className="md:flex hidden">
            <div className="lg:p-5 md:p-3 bg-accent flex flex-col w-fit h-screen">
            {sidebarItems.map((item, index) => (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Button className="hover:scale-105 transition-all duration-200 mb-5">
                            {item.icon}
                        </Button>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                        {item.name}
                    </TooltipContent>
                </Tooltip>
            ))}
            </div>

            <div className="p-5 lg:w-84 md:w-64 bg-accent/50">

                <div className="flex items-center justify-between ">
                    <h1 className="text-2xl font-bold">Chats</h1>
                    <Button className="rounded-full"><UserRoundPlus /></Button>
                </div>
                

            </div>
        </div>
            
            <div className="md:hidden block">
                <MobileSidebar/>
            </div>
         
        </>
        
       
    )
}

export default AppSidebar
