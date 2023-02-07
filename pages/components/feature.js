import Image from "next/image";
import vin from "../image/variety.png"
import ver from "../image/theverge.png"
import bill from "../image/billboard.png"
import wir from "../image/wired.png"
import com from "../image/complex.png"

const Feature = () => {
    return (
        <div>
            <p className='text-center text-shade f-s-13 text-dark f-w-600 m-t-100'> FEATURED IN</p>
            <div className="container">
                <div className="row w-85 mx-auto m-t-30">
                    <div className="col "> <Image src={vin} /></div>
                    <div className="col"><Image src={ver} /></div>
                    <div className="col"> <Image src={bill} /></div>
                    <div className="col"> <Image src={wir} /></div>
                    <div className="col"><Image src={com} /></div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
