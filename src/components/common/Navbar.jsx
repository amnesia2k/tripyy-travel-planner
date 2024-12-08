import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// import { FcGoogle } from "react-icons/fc";
// import { signinWithGoogle } from "@/configs/signinWithGoogle";
import { ModeToggle } from "../mode-toggle";
// import { useState } from "react";
import SigninButton from "./SigninButton";

const Navbar = () => {
  // const [loading, setLoading] = useState(false);

  // const handleSignIn = async () => {
  //   setLoading(true);
  //   const user = await signinWithGoogle();
  //   console.log("signed in user:", user);
  // };
  return (
    <div className="flex justify-between items-center fixed z-50 right-0 left-0 top-0 max-w-7xl w-full mx-auto py-[15px] lg:py-[30px] bg-white dark:bg-[#0c0a09] px-5">
      <div>
        <Link
          to="/"
          className="font-greatVibes text-2xl text-primary md:text-5xl font-extrabold tracking-widest"
        >
          Trippy
        </Link>
      </div>

      <div className="flex flex-row gap-5 items-center">
        {/* <Button
          onClick={handleSignIn}
          className="flex items-center gap-2 text-white"
        >
          <FcGoogle />
          {loading ? "Signing in..." : "Sign in to continue"}
        </Button> */}
        <SigninButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
