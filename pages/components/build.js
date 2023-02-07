import React from 'react'
import Image from 'next/image'
import find from '../image/find.png'


const Build = () => {
    return (
        <div>
            <div class='center w-50 p-b-150'>
                <Image src={find}   objectFit='contain'/>
            </div>
            
        </div>
        
    ); 
}

export default Build;
