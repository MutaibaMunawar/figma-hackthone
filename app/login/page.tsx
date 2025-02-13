import React from "react";
import Image from "next/image";
import {
  //  SignedIn,
  SignedOut,
  SignInButton,
  // UserButton
} from "@clerk/nextjs";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        {/* Display Nike Logo */}
        <Image
          src="/Nike-Logo.png"
          alt="Nike Logo"
          width={50}
          height={50}
          style={{ width: "50px", margin: "0 auto" }}
        />

        {/* Show User information when signed in */}
        {/* <SignedIn> */}
        <div>
          <h2>Your Account for Everything Nike</h2>
          {/* <UserButton /> */}
        </div>
        {/* </SignedIn> */}

        {/* Show sign-in form when signed out */}
        <SignedOut>
          <form>
            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label
                htmlFor="password"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                Keep me signed in
              </label>
            </div>

            {/* Sign-in button */}
            <div
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <SignInButton mode="modal" />
            </div>
          </form>

          <p style={{ marginTop: "15px" }}>
            {/* <a href="#" style={{ color: '#0070f3', textDecoration: 'none' }}>Join Us</a> */}
          </p>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;
