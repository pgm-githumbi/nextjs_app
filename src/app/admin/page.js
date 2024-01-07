"use client";
import { bootstrap } from "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import signOut from "@/firebase/signout";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    //if (user == null) router.push("/");
  }, [user]);

  const onClick = async () => {
    try {
      await signOut();
      console.log("signed out successfully");
      router.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <div>
        <h1>Only logged in users can view this page</h1>;
      </div>
      <div>
        <button className="btn btn-primary btn-lg" onClick={() => onClick()}>
          Logout
        </button>
      </div>
    </React.Fragment>
  );
}

export default Page;
