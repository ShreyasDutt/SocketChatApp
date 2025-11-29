import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { ThemeProvider } from './components/themeprovider'
import {shadcn} from '@clerk/themes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<ClerkProvider publishableKey={PUBLISHABLE_KEY}
signInUrl='/sign-in'
signUpUrl='/sign-up'
appearance={{
      layout: {
      unsafe_disableDevelopmentModeWarnings: true
      },
      baseTheme: shadcn,
      }}      
>
 <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
</ClerkProvider>
  </ThemeProvider>
)
