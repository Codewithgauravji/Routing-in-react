import React from 'react'
import Header from './Header'
import './Home.css'
function Home() {
    return (
        <div>
            <Header />
            <div className='main'>
                <h1 id='text1'> hello '<span>I</span> am learning <span>REACT</span></h1>
            </div>
        </div>
    )
}

export default Home