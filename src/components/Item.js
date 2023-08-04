import React from 'react'
import Arr from './Arr'
import Game from './Game'

const Item = () => {
    return (
        <>
<div className= "container flex items-center justify-center m-12 flex-col">

            {

                Arr.map((x) => {
                    let { id, name, link, img , repo } = x;
                    return <Game key={id} name={name} link={link} img={img} repo = {repo} />

                })
            }
            </div>
        </>
    )
}

export default Item