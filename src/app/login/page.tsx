"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios'


const LogInPage = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })
  console.log(user);

  const onLogIn = async ()=>{
    try {
      const response = await axios.post('/api/users/login', user);
      console.log('Login Success',response.data );
      toast.success('LogIn Successfull!');
      setTimeout(() => {
        router.push('/profile');
      }, 1500);
    } catch (error:any) {
      console.log('Login Failed', error.message);
      toast.error("Invalid Credentials");
    }

  }
  return (
    <section className='container-fluid d-flex bg-dark vh-100 text-white login-page'>
      {/*SVG*/}
      <div className='col-8'>
        <Image
          src='/undraw_mobile_login_re_9ntv.svg'
          alt='login'
          height={500}
          width={500}
        />
      </div>
      {/*FORM*/}
      <div className='col-4 login-form'>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <br />
        <input className='form-control bg-dark text-white'
          type="email"
          value={user.email}
          placeholder='Your Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input className='form-control bg-dark text-white'
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Your Password'
        />
        <br />
        <button
          className='btn w-100'
          onClick={onLogIn}
        >Log In
        </button>
        <div className='d-flex justify-content-around mt-3'>
          <Link href='/signup'>SignUp</Link>
          <span>|</span>
          <Link href='/forgetpwd'>Forget Password?</Link>
        </div>
      </div>
    </section>
  )
}

export default LogInPage
