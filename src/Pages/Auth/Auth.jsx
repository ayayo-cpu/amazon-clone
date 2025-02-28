import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import styels from "./Signup.module.css";
function Auth() {
  return (
    <section className={styels.login}>
      <div>
        <Link>
          <img
            src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
            alt=""
          />
        </Link>
      </div>
      <div className={styels.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button type="submit" className={styels.signin_btn}>
            Sign In
          </button>
        </form>
        {/* Aggrement */}
        <p>
          By signing in, you agree to the conditions of use and sale of this
          clone of Amazon. Please see our Privacy Notice, Cookie Notice, and
          Interest-Based Ads Notice.
        </p>
        <button className={styels.register_btn}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
