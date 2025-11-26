import { TooltipProvider } from "@radix-ui/react-tooltip"
import { ThemeProvider } from "./components/themeprovider"
import AppSidebar from "./components/sidebar"

const App = ({children}: {children?: React.ReactNode}) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <AppSidebar/>
      {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App