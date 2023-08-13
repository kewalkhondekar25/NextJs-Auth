"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {

  const [userName, setUserName] = useState();
  const [userEmail, setuserEmail] = useState();
  const router = useRouter();

  const onLogOut = async () => {
    try {
      await axios.get('/api/users/logout');
      toast('Good Bye! See you later', {
        icon: '👏',
      });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  }

  const getUserDetails = async () => {
    const response = await axios.get('/api/users/me');
    console.log(response.data);
    setUserName(response.data.data.username);
    setuserEmail(response.data.data.email)
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <section className='container-fluid d-flex justify-content-between bg-dark text-white vh-100 profile-page'>
      <div className='prof'>
        <Image
          src='/undraw_pic_profile_re_7g2h.svg'
          alt='profile'
          height={300}
          width={300}
        />
        <br />
        <h3>Greetings! {userName} </h3>
      </div>

      <div className='p-5'>
        <h4>{userEmail}</h4>
        <button
          className='btn btn-primary'
          onClick={onLogOut}
        >
          Log Out
        </button>
      </div>

    </section>
  )
}

export default ProfilePage
