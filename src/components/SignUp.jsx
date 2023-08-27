import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <p>Sign up form goes here</p>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;