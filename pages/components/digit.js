import React from 'react'
import Image from 'next/image';
import logos from '../image/logos.png'
import butt from '../image/butt.png'
const Digit = () => {
    return (
        <div>
            <div className='bg-digit'>
                <div className="container">
                <div className="row">
                    <div className="col">
                    <Image src={logos}   objectFit='contain'/>
                    </div>
                    <div className="col p-l-100 p-b-50">
                        <p className='sonne-b text-sound f-w-600 f-s-16 lh-2 m-t-150 '>PLUGINS</p>
                        <p className='sonne-b f-s-48 lh-1' >Build your <br /> <span className='mycolor'>digital studio</span></p>
                        <p className='text-grey'>Try industry-leading music software for free, <br /> pay it off over time and own it forever.</p>
                        <button className='btn btn-mycolor rounded-pill f-s-12'>TRY GEAR</button>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                <div className="col  p-b-50">
                        <p className='sonne-b text-sound f-w-600 f-s-16 lh-2 m-t-150 '>STUDIO</p>
                        <p className='sonne-b f-s-48 lh-1' >Stay in <span className='mycolor'>sync</span></p>
                        <p className='text-grey'>Try industry-leading music software for free, <br /> pay it off over time and own it forever.</p>
                        <button className='btn btn-mycolor rounded-pill f-s-12'>TRY STUDIO</button>
                    </div>
                    <div className="col">
                    <Image src={butt}   className='m-r-40'/>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Digit;
