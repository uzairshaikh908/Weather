import React from 'react'

function Main() {
  return (
    <div className='p-4  items-center'>
        <h1 className='item-center font-bold text-5xl '>Cities</h1>
       <div className='flex p-2 m-2 justify-between border-spacing-1 bg-gray-500'>
        <img src="https://th.bing.com/th?id=OSGI.934F259007E96958F19DD423A12E1432&w=146&h=116&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=18.2" alt="meerut" />
        <img src="https://th.bing.com/th?id=OSGI.934F259007E96958F19DD423A12E1432&w=146&h=116&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=18.2" alt="meerut" />
        <img src="https://th.bing.com/th?id=OSGI.934F259007E96958F19DD423A12E1432&w=146&h=116&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=18.2" alt="meerut" />
       </div>
       <div class="wrap">
   <div class="search" className='border bg-gray-700 rounded-full p-2 m-2'>
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
<div className=''>
    <img src="https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={1000} />
</div>
    </div>
  )
}

export default Main