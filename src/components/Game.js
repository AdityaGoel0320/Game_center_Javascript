import React from 'react'

const Game = (props) => {
    let { id, name, link, img, repo } = props;

    return (
        <>
            <div className='box'>

                <div className="right">
                    <a href={link} target='_blank'>

                        <img className='img' src={img} alt="" />

                    </a>
                </div>
                <div className="left">

                    <h3>{name}</h3>


                    <div className='btn-box'>

                        <button>
                            <a href={link} target='_blank'>Live</a>

                        </button>

                        <button>
                            <a href={repo} target='_blank'>Code</a>


                        </button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Game