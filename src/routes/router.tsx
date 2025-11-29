import App from "@/App";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./ProtectedRoutes";
import { SignInPage } from "@/pages/Auth/SignIn";
import { SignUpPage } from "@/pages/Auth/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <ProtectedRoute>
        <App />
        </ProtectedRoute>
    ),
  },
  {
    path:"/sign-in/*",
    element: <SignInPage/>
  },
  {
    path:"/sign-up/*",
    element: <SignUpPage/>
  },
]);
