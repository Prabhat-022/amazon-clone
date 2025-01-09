"use client"
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { decrementQuantity, getCart, removeFromTheCart, incrementQuantity, clearAllCart } from '@/redux/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
// import ShoppingCart from './ShoppingCart'
// import ProccedToBuy from './ProccedToBuy'

const Cart = () => {
    const cart = useAppSelector(getCart);
    const dispatch = useAppDispatch();
    const router = useRouter();

    let totalPrice = 0;
    cart.forEach((item: any) => {
        totalPrice += item.price * item.quantity;
    });

    let left = false;

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex w-full justify-between'>
                <div className=' flex justify-between'>
                    <div className="w-[70%]">
                        <div className='flex justify-between items-center border-b border-gray-300 py-5'>
                            <h1 className='font-bold text-2xl'>Shopping Cart</h1>
                            <h1 className='font-medium'>Price</h1>
                        </div>

                        <div className="">
                            {
                                cart.map((product: any) => {
                                    return (
                                        <div key={product.id} className='py-4 flex justify-between  border-b border-gray-200'>
                                            <div className='flex'>
                                                <div>
                                                    <Image src={product.image}
                                                        width={100}
                                                        height={100}
                                                        alt={product.title} />
                                                </div>
                                                <div className='ml-4'>
                                                    <h1 className='font-medium'>{product.title}</h1>
                                                    <p className='text-[#007600] font-bold my-1 text-xs'>In Stock</p>
                                                    <h1 onClick={() => {
                                                        dispatch(removeFromTheCart(product.id));
                                                    }} className='font-bold text-red-600 cursor-pointer w-fit'>REMOVE</h1>
                                                    <div className='flex text-xl my-4 font-medium justify-between items-center w-fit bg-gray-200 rounded-md px-5 py-1'>
                                                        <div
                                                            onClick={() => {
                                                                if (product.quantity > 1) {
                                                                    dispatch(decrementQuantity(product));
                                                                }
                                                            }}
                                                            className='cursor-pointer mr-4 text-black'>-</div>
                                                        <div className='text-black font-bold'>{product.quantity}</div>
                                                        <div
                                                            onClick={() => {
                                                                dispatch(incrementQuantity(product));
                                                            }}
                                                            className='cursor-pointer ml-4 text-black'>+</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className='font-bold text-xl'>{`$${product.price}`}</h1>
                                                <p className='text-xs py-1'>M.R.P.: <span className='line-through '>₹3,995.00</span></p>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                            <h1 onClick={() => {
                                dispatch(clearAllCart());
                            }} className='text-red-600 font-bold cursor-pointer py-2'>CLEAR ALL</h1>
                            {/* <Subtotal left={false} length={cart.length} totalPrice={totalPrice} /> */}
                            <h1 className={`${left ? 'text-left text-sm' : 'text-right text-lg'}`}>{`Subtotal (${cart.length} items): `}<span className='font-bold'>{`$${totalPrice.toFixed(2)}`}</span></h1>

                        </div>
                    </div>

                    <div className='w-[20%] h-fit border border-gray-300 ml-4'>

                        <div className='p-4 text-sm'>
                            <p><span className='text-[#007600] font-medium'> Your order is eligible for FREE Delivery.</span> Choose FREE Delivery option at checkout.</p>
                            {/* <Subtotal left={true} length={length} totalPrice={totalPrice} /> */}

                            <h1 className={`${left ? 'text-left text-sm' : 'text-right text-lg'}`}>{`Subtotal (${cart.length} items): `}<span className='font-bold'>{`$${totalPrice.toFixed(2)}`}</span></h1>

                            <button onClick={() => {
                                router.push("/checkout")
                            }} className='bg-[#FFD814] w-full py-1 rounded-md shadow-md my-3'>Procced to Buy</button>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Cart
