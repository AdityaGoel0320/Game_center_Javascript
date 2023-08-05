import React from 'react'

const Intro = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-5'>
            <h3 className='h3'>Welcome to </h3>
            <div className='flex items-center justify-center'>
                <h1  className=' h1 flex items-center justify-center'>
                    <span style = {{"color" : "red"}} >GameCenter.com</span>
                </h1>
                <img className = "img" src="./images/logo.png" alt="" />
            </div>

            <p className='p'>It is the best place to play games with your freinds</p>
        </div>


    )
}

export default Intro