import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const {register,handleSubmit,formState: { errors }} =useForm()
    const {createUser,updateUser} =useContext(AuthContext)
    const {providerLogin} = useContext(AuthContext)
    const location = useLocation()
    const Navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = data =>{
    createUser(data.email,data.password)
    .then(result=>{
        const user =result.user;
        console.log(user)
        const userInfo ={
          displayName :data.name
          
        }
        updateUser(userInfo)
        .then(()=>{
          Navigate(from,{replace:true})
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>{
      console.error(err)
    })
      }

      const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
        const user = result.user;
        console.log(user)
        Navigate(from,{replace:true})
      })
      .catch(err=>console.error(err))
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="card shadow-lg w-96 p-7">
        <h2 className="text-2xl font-bold text-center">Register Now!</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">your name</span>
            </label>
            <input
              type="name"
              {...register("name",{
                required:"name is required"
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">your email</span>
            </label>
            <input
              type="email"
              {...register("email",{
                required:"email is required"
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">your password</span>
            </label>
            <input
              type="password"
              {...register("password",{
                required:"password is required",
                minLength: {value:6, message: "password must be 6 characters long"},
                pattern: {value: /(?=.*[0-9])(?=.*[A-Z])/,message: "password must be strong"}
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <input
            className="btn btn-accent mt-5 w-full"
            value="Register"
            type="submit"
          />
        </form>
        <p className="mt-5">
          Already Have an Account?{" "}
          <Link className="text-primary" to="/login">
            Please Login!
          </Link>
        </p>
        <div className="divider">OR</div>
              <Link to='/'><button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button></Link>
      </div>
    </div>
    );
};

export default Register;