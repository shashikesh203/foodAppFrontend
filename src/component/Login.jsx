import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [para, setpara] = useState("");

  const [emailParagraph, setemailParagraph] = useState("");
  const [passwordparagraph, setpasswordparagraph] = useState("");

  const handleLogin = async (e) => {
    if (emailRef.current.value.length === 0) {
      setemailParagraph("Enter your email");
    } else {
      setemailParagraph("");
    }
    if (passwordRef.current.value.length === 0) {
      setpasswordparagraph("Enter your password");
    } else {
      setpasswordparagraph("");
    }
    setpara("");
    e.preventDefault();

    if (
      emailRef.current.value.length > 0 &&
      passwordRef.current.value.length > 0
    ) {
      const data = await fetch("http://localhost:5000/api/log-in", {
        method: "POST",
        body: JSON.stringify({
          email:emailRef.current.value ,
          password:passwordRef.current.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(data);
      const result = await data.json();
      console.log(result);
      if(result.data===0){
        setpara(result.message);
      }else {
        setpara("");
        navigate('/FrontPage')
      }
    }
  };
  return (
    <>
      <div class="bg-red-466">
        <form class="grid px-10 pt-10" onSubmit={handleLogin}>
          <label htmlFor="text" class="pt-2">
            Email address
          </label>
          <input
            id="username"
            ref={emailRef}
            type="text"
            placeholder=""
            class="bg-[#F6F6F6] rounded-md pt-1 pb-1"
          ></input>
          <p class="text-red-500">{emailParagraph}</p>
          <label htmlFor="psw" class="pt-2">
            Password
          </label>
          <input
            id="password"
            ref={passwordRef}
            type="password"
            placeholder=""
            class="bg-[#F6F6F6] rounded-md pt-1 pb-1"
          ></input>
          <p class="text-red-500">{passwordparagraph}</p>
          <div class="text-right pt-2 pb-2">
            <p class="text-blue-400">Forget Password?</p>
          </div>
          <p class="text-center text-red-500 p-2">{para}</p>
          <div class="text-center pt-3">
            <button
              class="bg-red-500 px-14 pt-1 pb-1 rounded-md text-lg"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="text-center">
        <button class="bg-[#F6F6F6] pl-6 pr-6 pt-2 pb-2 mt-2 rounded-md text-sm">
          {" "}
          Login with Google
        </button>
      </div>
    </>
  );
};
export default Login;
