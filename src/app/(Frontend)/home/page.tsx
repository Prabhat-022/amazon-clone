
"use client"
import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { ProductProps } from '../../type'
import { useDispatch } from 'react-redux'
import { resetCart } from '@/store/nextSlice'

interface Props {
  productData: ProductProps
}

const HomePage = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(resetCart())
  }, [dispatch])
  
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products />
        </div>
      </div>

      
    </main>
  )
}

export default HomePage
