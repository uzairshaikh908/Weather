import React from 'react'

function Header() {
  return (
    <div className='bg-black text-white m-0 p-0 flex justify-between items-center sticky mt-0 '>
     <img src="https://th.bing.com/th?id=OIP.uzY5GGrUCQcK0LbR7_yZTwAAAA&w=244&h=244&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" width={80} height={30}/>
     <div className='justify-end p-10'>
     <a href="#" className='p-4 text-3xl'>Home</a>
     <a href="#" className='p-4 text-3xl'>Cities</a>
     <a href="#" className='text-3xl'>News</a>
    </div>
    <div className='justify-between  p-5'>
        <button className='p-2 bg-red-500 text-white border rounded-full'>SignIn</button>
        <button>LogIn</button>
    </div>
    </div>
  )
}

export default Header