import React from "react";
import { AuthGuard } from "../../Auth/auth-guard";
import { useAuth } from "../../Auth/auth-context";
import { Button } from "@/components/ui/button";

//implement journal components...
const Journal = () => {
  const { signOut } = useAuth();
  return (
    <AuthGuard>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div>Protected Content</div>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </AuthGuard>
  );
};

export default Journal;
