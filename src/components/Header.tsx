"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from "../../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
// import { supabase } from '@/lib/supabase/products';
import { FaLocationDot } from "react-icons/fa6";

const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History",
    "Amazon Pay",
    "Gift Ideas",
    "Health, Household & Personal Care",
    "Sign out"
]

const optons = ["All", "Fresh", "Amazon miniTV", "Sell", "Gift Cards", "Baby", "Buy Again", "Browsing History", "Amazon Pay", "Gift Ideas", "Health", "Household & Personal Care", "Alexa Skills", "Appliances", "Apps & Games", "Car & Motorbike", "Collectibles", "Computer & Accessories", "Deal", "Electronics", "Furniture", "Grocery", "Home & Kitchen", "Jewellery", "Kindle", "Mobiles", "Music", "Pet Supplies", "Prime Video", "Sports", "Toys & Games", "Toys", "Video Games", "Watches", "Wireless", "Furniture"]


const Header = () => {
    const [query, setQuery] = useState<string>("");
    const router = useRouter();


    const cart = useAppSelector(getCart);

    const user = useAppSelector((store) => store.cart.user);
    console.log('user', user.username);

    const searchHandler = () => {
        router.push(`/search/${query}`);
    }



    return (
        <>
            <div className='bg-[#131921] text-white py-1'>
                <div className='flex items-center justify-between w-[100%] mx-auto'>

                    {/* //Amazon logo */}

                    <Link href={'/'} className='w-[10%]'>
                        <Image src={amazonLogo} alt={"logo"} width={150} height={150} className='cursor-pointer' />
                    </Link>
                    <div className="flex items-center w-[20%] justify-center px-2">
                        <div className="">
                            <FaLocationDot width={20} size={20} />
                        </div>

                        <div className="w-full">
                            <p>Deliver to varanasi 221101</p>
                            <h1 className='font-bold px-2'>Update location</h1>
                        </div>
                    </div>

                    {/* search bar */}
                    <div className='flex items-center w-[60%] border bg-white'>
                        <div>
                            <select className='w-full p-2 rounded-l-md outline-none text-black'>
                             
                                {
                                    optons.sort().map((item, idx) => {
                                        return (
                                            <option key={idx}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>


                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    searchHandler();
                                }
                            }}
                            type="text"
                            className='w-full p-2  outline-none text-black' placeholder='Search Amazon.in' />
                        <div
                            onClick={searchHandler}
                            className='bg-[#FEBD69] p-2 cursor-pointer hover:bg-[#ffad43]   rounded-r-md'>
                            <CgSearch size={"24px"} className='text-black' />
                        </div>
                    </div>
                    <div className='flex items-center justify-around w-[20%]'>
                        <div className='cursor-pointer text-white'>
                            {
                                user ? <h1 className='font-medium text-sm' onClick={() => { router.push("/profile") }}>{user.username}</h1> : <h1 className='font-medium text-sm' onClick={() => {
                                    router.push("/login")
                                }}>Hello, Sign in</h1>
                            }
                            <h1 className='font-medium text-sm'>Account & Lists</h1>
                        </div>
                        <div>
                            <p className='text-xs'>Returns</p>
                            <h1 className='font-medium text-sm'>& Orders</h1>
                        </div>
                        <Link href={"/cart"} className='cursor-pointer'>
                            <p className='relative top-3 left-5'>{cart.length}</p>
                            <div className='flex'>
                                <div>
                                    <BiCart size={"40px"} />
                                </div>
                                <h1 className='mt-4'>cart</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg-[#232F3E] w-full text-white p-2  flex justify-between items-center'>
                <div>
                    {
                        itemList.map((link, idx) => {
                            return (
                                <Link key={idx} href={`/header/${link}`} className='mx-2 hover:border border border-transparent hover:border-white p-2'>
                                    {link}
                                </Link>
                            )
                        })

                    }

                </div>
                {/* <div className='mr-5'>
                    <h1 onClick={ async ()=>{
                        const {error} = await supabase.auth.signOut();
                        router.push("/signin");
                    }} className='text-[#FEBD69] font-bold cursor-pointer hover:underline' >Sign out</h1>
                </div> */}
            </div>

        </>
    )
}

export default Header