// src/routes/SignInPage.tsx
import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
};
