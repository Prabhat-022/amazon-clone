"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import { useSuperbase } from '@/lib/hooks/useSuperbase';
import CategoryWiseProduct from '@/components/shared/CategoryWiseProduct';

interface props{
  title:string
}

const Home = () => {
  const {   mensClothing,
    getMensClothing,
    womensClothing,
    getWomensClothing
     } = useSuperbase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [])


  return (
    <div>
      <Image
      style={{
        maskImage:'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'}}
      src={"https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"} width={10000} height={1000} alt="banner" />

      <div className='w-[90%] mx-auto grid grid-cols-4 gap-2 relative -top-64'>
        {
          mensClothing?.map((product: any, ) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} title="Men's Clothing"/>
              </div>
            )
          })
        }
        {
          womensClothing?.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} title="Women's Clothing" />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home