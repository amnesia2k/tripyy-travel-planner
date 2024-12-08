import { auth } from "@/configs/firebaseConfig";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SigninButton = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSignin = async () => {
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      if (token) {
        localStorage.setItem("userToken", JSON.stringify(token));
      } else {
        console.warn("no access token was received");
      }
      setUser(user);
      toast.success(`Signed in as ${user?.displayName} successfully`)
      console.log("user:", user);
      return user;
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("userToken");
      setUser(null);
      toast.success(`Signed out of ${user?.displayName} successfully`)
      console.log("User signed out");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-5">
          <h3>Welcome, {user?.displayName}</h3>
          <Button onClick={handleSignout} className="text-white">
            Sign out
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleSignin}
          className="flex items-center gap-2 text-white"
        >
          <FcGoogle />
          {loading ? "Signing in..." : "Sign in to continue"}
        </Button>
      )}
    </div>
  );
};

export default SigninButton;
