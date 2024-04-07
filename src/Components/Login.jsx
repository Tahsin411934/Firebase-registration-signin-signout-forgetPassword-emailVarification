import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/Firebase.confiq";
import { useRef } from "react";


const Login = () => {
    const emailRef= useRef(null)
    const handleLogin = (e) =>{
        e.preventDefault();
        
        const email=e.target.email.value;
        const password=e.target.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleForgetPassword=()=>{
        const email=emailRef.current.value
        sendPasswordResetEmail(auth,email)
        .then()
        .catch()
    }
    return (
        <div className="w-96 mx-auto">
            <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
    );
};

export default Login;