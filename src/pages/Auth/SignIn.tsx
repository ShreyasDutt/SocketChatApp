// src/routes/SignInPage.tsx
import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <SignIn path="/sign-in" routing="path" />
    </div>
  );
};
