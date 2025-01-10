import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">My Profile</h1>
        <div className="flex flex-row items-center">
          <img className="w-32 h-32 rounded-full mr-4" src="https://picsum.photos/512" alt="Profile Image" />
          <div>
            <p className="text-xl font-semibold">John Doe</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <hr className="my-8" />
        <div>
          <p className="text-lg font-semibold">Account Information</p>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
