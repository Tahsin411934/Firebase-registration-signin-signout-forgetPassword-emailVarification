import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase/Firebase.confiq";
import { useState } from "react";


const Logout = () => {
    const [username,setUsername] = useState(null)

    const provider = new GoogleAuthProvider();


    const handleForm=(e)=>{
        e.preventDefault();
        const nam=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        createUserWithEmailAndPassword(auth,email,password)
       .then(res=>{
        console.log(res.user)

       
       })
       .catch(err=>{
        console.error(err)
       })


       
    }

    const handleGoogle= () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
         
            console.log(result.user)
            setUsername(result.user.displayName)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleSignout=()=>{
        signOut(auth)
        .then(()=>{
            setUsername(null)
        })

        .catch(error=>{
            console.log(error   )
        })
    }

    return (
        <div className="w-96 mx-auto">
        <form className="card-body" onSubmit={handleForm}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" name="name" placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name="email" type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>

  <button onClick={handleGoogle} className="text-yellow-500 btn btn-primary">Login with google</button>
  <button onClick={handleSignout} className="text-yellow-500 btn btn-primary">signout</button>
  <h1>{username}</h1>
    </div>
    );
};

export default Logout;