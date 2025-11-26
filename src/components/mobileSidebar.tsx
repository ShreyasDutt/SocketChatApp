import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { MessageCircleMore, UsersRound } from "lucide-react"
import { Button } from "./ui/button"

export const MobileSidebar = () => {
        const sidebarItems = [
        {name: 'Chats', icon:<MessageCircleMore />},
        {name: 'People', icon:<UsersRound />},
    ]
  return (
    <div>
         <div className="bg-accent flex w-screen h-fit items-center justify-around fixed bottom-0 p-4">
            {sidebarItems.map((item, index) => (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Button className="hover:scale-105 transition-all duration-200">
                            {item.icon}
                        </Button>
                    </TooltipTrigger>

                    <TooltipContent side="top">
                        {item.name}
                    </TooltipContent>
                </Tooltip>
            ))}
            </div>


    </div>
  )
}
