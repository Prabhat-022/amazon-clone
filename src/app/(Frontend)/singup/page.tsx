'use client'
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@/lib/hooks/redux';
import { setUserData } from '@/redux/cartSlice';

const Singuppage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: ''
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true)
            const response = await axios.post('/api/singup', user 
            )
            console.log(response.data.savedUser)
            dispatch(setUserData(response.data.savedUser));
            router.push('/login')
            toast.success('singup successful', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            setLoading(false)

        } catch (error) {
            console.log('singup failed', error)
            toast.error('singup failed', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });

        }
    }
    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (

        <div className="flex items-center justify-center h-screen text-black">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-center text-3xl font-bold">Singup</h1>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="username" className="mb-2">Username</label>
                        <input type="text" id="username" className="p-2 border-2 rounded-lg" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" id="email" className="p-2 border-2 rounded-lg" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="password" id="password" className="p-2 border-2 rounded-lg" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <Link href="/login" className=''>Already have an account? <span className='text-blue-600 text-bold underline-offset-auto '>Login</span> </Link>

                  
                     {
                        buttonDisabled ? (
                            <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg cursor-not-allowed" disabled>
                                Singup
                            </button>
                        ) : (
                        
                            loading ? (
                                <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg cursor-not-allowed" >
                                    Loading...
                                </button>
                            ) : (
                                <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg cursor-pointer">
                                    Singup
                                </button>
                            )
                        
                        )
                     }
                    
                    
                </form>
            </div>
        </div>

    )
}

export default Singuppage
