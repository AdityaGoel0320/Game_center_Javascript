import React from 'react'

const Intro = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-5'>
            <h3>Welcome to </h3>
            <div className='flex items-center justify-center'>
                <h1 className='flex items-center justify-center'>
                    GameCenter.com
                </h1>
                <img className='flex items-center justify-center' src="./images/logo.png" alt="" />
            </div>

            <p>It is the best place to play games with your freinds</p>
        </div>


    )
}

export default Intro