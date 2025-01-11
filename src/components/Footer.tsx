import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-96 p-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sed quam ut nunc porttitor bibendum. Aenean ac nibh eu eros
            egestas posuere. Sed ut erat ac erat tempus malesuada.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold">Help</h2>
          <ul className="list-none">
            <li className="py-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shipping
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Returns
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <p className="text-gray-600 text-center">
          &copy; 2020 Amazon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
