import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { MessageCircleMore, UserRoundPlus, UsersRound } from "lucide-react"
import { Button } from "./ui/button"
import { MobileSidebar } from "./mobileSidebar"
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { useNavigate } from "react-router"
import { TooltipProvider } from "@radix-ui/react-tooltip"

const AppSidebar = () => {
    const navigate = useNavigate();
    const sidebarItems = [
        {name: 'Chats', icon:<MessageCircleMore />,link:'/'},
        {name: 'People', icon:<UsersRound />, link:'/people'},
    ]

    

    return (
        <>
        <TooltipProvider>
        <div className="md:flex hidden">
            <div className="flex flex-col w-fit h-screen items-center justify-between bg-accent">
                <div className="lg:p-5 md:p-3 flex flex-col">
                {sidebarItems.map((item, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <Button className="hover:scale-105 transition-all duration-200 mb-5" onClick={()=>{
                                navigate(item.link)
                            }}>
                                {item.icon}
                            </Button>
                        </TooltipTrigger>

                        <TooltipContent side="right">
                            {item.name}
                        </TooltipContent>
                    </Tooltip>
                ))}   
            </div>
            <div className="scale-120 mb-4">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
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
        </TooltipProvider>
         
        </>
        
       
    )
}

export default AppSidebar
