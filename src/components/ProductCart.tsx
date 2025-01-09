import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Ratings from './shared/Ratings';

const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter();
    console.log("router", router)
    return (
        <div className='shadow-md rounded-md p-4 max-w-sm mx-auto my-4'>
            <div className='cursor-pointer' onClick={()=>{
                router.push(`/product/${product.id}`)
            }}>
                <div className='flex items-center justify-center bg-gray-100 h-[250px] rounded-md overflow-hidden'>
                    <Image className='mix-blend-multiply p-8' src={product.image} alt={product.title} width={200} height={200} />
                </div>
                <h1 className='font-bold text-lg mt-4'>{product.title}</h1>
                <p className='text-gray-600 text-sm mt-2'>{`${product.description.substring(0, 150)}...`}</p>
                <div className='flex items-center justify-start my-2'>
                    <Ratings ratings={product.rating}/>
                </div>
                <p className='font-bold text-2xl mt-4'>{`$${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard