import React, { useRef } from "react";
import { useState } from "react";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [para, setpara] = useState("");
  const [emailpara, setemailpara] = useState("");
  const [passwordpara, setpasswordpara] = useState("");
  const [usernamepara, setusernamepara] = useState("");

  const handleSignUp = async (e) => {

    if (nameRef.current.value.length === 0) {
      setusernamepara("Username is empty");
    } else if (
      nameRef.current.value.length < 3 &&
      nameRef.current.value.length > 0
    ) {
      setusernamepara("atleast 3 char required");
    } else {
      setusernamepara("");
    }
    if (passwordRef.current.value.length === 0) {
      setpasswordpara("Enter password");
    } else {
      setpasswordpara("");
    }
    if (emailRef.current.value.length === 0) {
      setemailpara("Enter your email address");
    } else {
      setemailpara("");
    }
    e.preventDefault();
    if (
      nameRef.current.value.length > 3 &&
      emailRef.current.value.length > 0 &&
      passwordRef.current.value.length > 0
    ) {
      const data = await fetch("http://localhost:5000/api/sign-up", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await data.json();
      if (result.data === 0) {
        setpara(result.message);
      } else {
        setpara("");
      }

      console.log(result);
    }
  };

  return (
    <>
      <div class="bg-red-466">
        <form class="grid px-10 pt-10 " onSubmit={handleSignUp}>
          <label htmlFor="text" class="pt-2">
            Full Name
          </label>
          <input
            ref={nameRef}
            type="text"
            placeholder=""
            class="bg-[#F6F6F6] rounded-md pt-1 pb-1"
          ></input>
          <p class="text-red-500">{usernamepara}</p>
          <label htmlFor="text" class="pt-2">
            Email address
          </label>
          <input
            ref={emailRef}
            type="text"
            placeholder=""
            class="bg-[#F6F6F6] rounded-md pt-1 pb-1"
          ></input>
          <p class="text-red-500">{emailpara}</p>
          <label htmlFor="psw" class="pt-2">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder=""
            class="bg-[#F6F6F6] rounded-md pt-1 pb-1"
          ></input>
          <p class="text-red-500">{passwordpara}</p>
          <p class="text-center text-red-500">{para}</p>
          <div class="text-center pt-6">
            <button
              class="bg-red-500 px-14 pt-1 pb-1 rounded-md text-lg"
              type="submit"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
      <div class="text-center">
        <button class="bg-[#F6F6F6] pl-6 pr-6 pt-3 pb-3 mt-2 rounded-md text-sm">
          SignUp with Google
        </button>
      </div>
    </>
  );
};

export default Signup;
