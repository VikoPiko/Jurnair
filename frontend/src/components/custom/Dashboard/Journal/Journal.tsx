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

// import { Button } from "@/components/ui/button";
// import React from "react";

// const Journal = () => {
//   const isLoggedIn = false;

//   return (
//     <div className="flex items-center justify-center">
//       {isLoggedIn ? (
//         <div>
//           <Button className="font-semibold">+ New Entry</Button>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center gap-y-5">
//           <h1 className="text-2xl font-semibold text-stone-950/85 dark:text-gray-100">
//             You must be logged in to use the Journal.
//           </h1>
//           {/* <div className="inline-flex gap-x-5 relative bottom-0 right-0"> */}
//           <div className="inline-flex justify-center items-center gap-10">
//             <div className="flex flex-col gap-y-2 items-center justify-center border rounded-xl p-4 shadow-md w-[280px]">
//               <h1>
//                 New here? <span className="font-semibold">Sign up!</span>
//               </h1>
//               <Button>Sign Up</Button>
//             </div>
//             <div className="flex flex-col items-center justify-center gap-y-2 border rounded-xl p-4 shadow-md w-[280px]">
//               <h1>
//                 Already have an account?{" "}
//                 <span className="font-semibold">Sign in!</span>
//               </h1>
//               <Button variant={"outline"}>Sign In</Button>
//             </div>
//           </div>
//         </div>
//         // </div>
//       )}
//     </div>
//   );
// };

// export default Journal;
