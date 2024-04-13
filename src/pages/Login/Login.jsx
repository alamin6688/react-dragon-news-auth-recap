import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero py-20 bg-base-200 mt-7">
        <div className="hero-content">
          <div className="card shrink-0 w-full md:w-[900px] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <h2 className="text-center text-3xl pb-10">Login your account</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="text-center text-xs pt-3">
                    Dont’t Have An Account ? <span></span>
                    <Link to="/"><span className="text-red-500 underline">Register</span></Link> 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
