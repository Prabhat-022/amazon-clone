'use client'
import SingleProduct from '@/components/shared/SingleProduct';
import { useSuperbase } from '@/lib/hooks/useSuperbase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useSuperbase();

  console.log("product", singleProduct);

  useEffect(() => {
    getSingleProduct(Number(id!));
}, [])
    
  return (
    <>
    <div className="">
        <SingleProduct singleProduct={singleProduct}/>
    </div>
    </>

  )
}

export default Page
