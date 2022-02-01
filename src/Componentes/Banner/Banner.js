import React from 'react';
import '../Banner/banner.css'

const Banner = () => {
    return (
        <header className='header'>
            <div>
            <img src='/assets/banner/yacimiento.jpeg' alt='yacimiento-bentonita' className='banner' />
            <h1 className='title-banner'>Bentonita</h1>
            <p className='subtitle-banner'>Conseguir Bentonita al mejor precio</p>
            </div>
            <div className='container-data'>
                <p className='texto-explicativo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus malesuada accumsan. Donec vitae lectus aliquam, dignissim arcu eu.</p>
            </div>
        
        </header>
    );
};

export default Banner;