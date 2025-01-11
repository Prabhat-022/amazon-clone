'use client'
// import { useAppSelector } from '@/lib/hooks/redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';


const Profile = () => {
  // const user = useAppSelector((store) => store?.cart?.user);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="rounded-lg shadow-lg ">
          <h1 className="text-4xl font-bold mb-4">My Profile</h1>
          <div className="flex flex-row items-center">
            <Image className="w-32 h-32 rounded-full mr-4" width={100} height={100} src="https://picsum.photos/512" alt="Profile Image" />
            <div>
              {/* <p className="text-xl font-semibold">{user?.username}</p> */}
              {/* <p className="text-gray-600">{user?.email}</p> */}
            </div>
          </div>
          <hr className="my-8" />
          <div>
            <p className="text-lg font-semibold">Account Information</p>
            <p className="text-gray-600">Name: John Doe</p>
            <p className="text-gray-600">Email: john.doe@example.com</p>
          </div>
          <button className='bg-[#FFA41C] w-full rounded-full py-1 my-2' onClick={handleLogout}>log out</button>
        </div>
      </div>
    </>

  );
};

export default Profile;
