import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Authentication = ({ mutation }) => {
  const [value, setValue] = useState({ email: "", password: "" });
  //const data = useActionData();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    mutation.mutate(value);
  };
  return (
    <div>
      <h1>{isLogin ? "Log In" : "Create a new user"}</h1>

      {/* {data && data.errors && (
        <ul>
          {data.errors.map((err, index) => (
            <li key={index}>{err.msg}</li>
          ))}
        </ul>
      )} */}
      {/* {data && data.message && <p>{data.message}</p>} */}
      {/* <form onSubmit={handleSubmit} className='flex flex-col gap-4'> */}
      {/* {data && data.msg} */}

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            {/* <label>Username</label>
            <input
              type="text"
              placeholder="username"
              className=""
              id="username"
              name="username"
              required
              //   onChange={handleChange}
            /> */}
          </>
        )}
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="email"
          className=""
          id="email"
          name="email"
          autoComplete="email"
          //required
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="password"
          className=""
          id="password"
          name="password"
          autoComplete="current-password"
          // required
          onChange={handleChange}
        />

        
        <button
          //   disabled={}
          //   disabled={loading}
          className=""
        >
          Log in
          {/* {isSaving ? "Saving..." : "Save"} */}
          {/* {loading ? 'Loading...' : 'Sign Up'} */}
        </button>
        {/* <OAuth/> */}
        {/* <div className="">
          <p>Have an account?</p>
          <span className="">
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
              {isLogin ? "Create new user" : "Login"}
            </Link>
          </span>
        </div> */}
      </form>
      {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  );
};

export default Authentication;
