"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  
  const router = useRouter();
  const [user, setuser] = React.useState({
    username: '',
    email: '',
    password: ''
  })
  console.log(user);

  const onSignUp = async () => {
    try {
      const response = await axios.post('api/users/signup',user);
      console.log('Signup Successfull', response);
      toast.success('SignUp Successfull!')
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (error) {
      toast.error('User Details Already Exists');
      console.log('Signup failed', error);
    }

  }

  return (
    <section className='container-fluid d-flex vh-100 bg-dark text-white signup-page'>
      {/*SVG*/}
      <div className='col-8'>
        <Image
          src="/undraw_fingerprint_login_re_t71l.svg"
          alt='signup'
          height={500}
          width={500} />
      </div>
      {/*FORM*/}
      <div className=' col-4 signup-form'>
        <h1>SignUp</h1>
        <label htmlFor="username">Name</label>
        <br />
        <input className='form-control bg-dark text-white'
          type="text"
          value={user.username}
          onChange={(e) => setuser({ ...user, username: e.target.value })}
          placeholder='Your Name'
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input className='form-control bg-dark text-white'
          type="email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
          placeholder='Your Email'
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input className='form-control bg-dark text-white'
          type="password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
          placeholder='Your Password'
        />
        <br />
        <button className='btn w-100'
          onClick={onSignUp}
        >Sign Up
        </button>
        <br />
        <p>Already got an account?
          <Link href='/login'> Log In</Link> </p>
      </div>
      
    </section>
  )
}

export default SignUpPage
