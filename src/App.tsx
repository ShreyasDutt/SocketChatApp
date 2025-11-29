import Chat from "./components/Chat/Chat"
import AppSidebar from "./components/sidebar"

const App = ({children}: {children?: React.ReactNode}) => {
  return (
      <div className="flex">
      <AppSidebar/>
      {children}
      <Chat/>
      </div>

  )
}

export default App