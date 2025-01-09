import Image from 'next/image';
import React from 'react';
import Ratings from './Ratings';
import AddToCardContainer from '../AddToCardContainer';

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto mt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {singleProduct.map((product: any) => (
          <div key={product.id} className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-6">
            {/* Product Image */}
            <div className="bg-gray-100 flex-shrink-0">
              <Image
                className="mix-blend-multiply p-4 object-contain"
                src={product.image}
                width={300}
                height={300}
                alt={product.title}
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between mx-0 lg:mx-4 w-full">
              <div>
                <h1 className="font-bold text-xl mb-2 text-gray-800">{product.title}</h1>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Ratings ratings={product.rating} />
                <h2 className="font-bold text-lg text-gray-900 mt-2">{`$${product.price}`}</h2>
              </div>

              <div className="mt-6">
                <h1 className="font-semibold text-base mb-2 text-gray-700">About this item:</h1>
                <ul className="list-disc pl-6 text-sm text-gray-600">
                  <li>Processor: High performance MediaTek G85 Enhance gaming with 1GHz GPU</li>
                  <li>8GB of RAM including 4GB virtual, 6.74 HD+ 90Hz display</li>
                  <li>Corning Gorilla Glass 3 Protection, 50MP AI Triple Camera</li>
                  <li>Fast Side fingerprint, 5000mAh Battery</li>
                </ul>
              </div>
            </div>

            {/* Add to Cart Button */}
            <AddToCardContainer product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
