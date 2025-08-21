import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md'>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Admin Login</h1>
                <form action="" >
                    <div className='mb-4'>
                        <p className='text-sm font-semibold text-gray-600 mb-2'>Email Address</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800'/>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm font-semibold text-gray-600 mb-2'>Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800'/>
                    </div>
                    <button type="submit" className='w-full px-3 py-2 font-bold bg-amber-500 rounded-md '>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login