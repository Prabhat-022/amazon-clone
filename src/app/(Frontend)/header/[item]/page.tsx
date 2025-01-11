'use client'
import { useParams } from 'next/navigation';

import React from 'react'

const Page = () => {
    const {item} = useParams();
  return (
    <div>
      {item}
    </div>
  )
}

export default Page
