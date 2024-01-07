"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import signIn from "@/firebase/signin";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper d-flex align-items-center justify-content-center vh-100">
        <form onSubmit={handleForm} className="form">
          <h1 className="mt-60 mb-30">Sign In</h1>
          <div>
            <label htmlFor="email">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
