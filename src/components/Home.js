import React from 'react'
import image from "../virtual-intro-classroom-blog-header.png"

function Home() {
  return (
    <div className='home'>
        <form>
            <div>
                <input type="email" placeholder='your email address' />
                <input type="password" placeholder='Enter password' />
            </div>
            <div className='classbtn'>
                <button>Login</button>
            </div>
        </form>
        <div className='homeImage'>
            <img src={image} alt='student' />
        </div>
    </div>
  )
}

export default Home