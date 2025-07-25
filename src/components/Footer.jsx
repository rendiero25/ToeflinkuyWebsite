import { useNavigate } from "react-router-dom";

import FooterBg from '../assets/worldbg.png';

const Footer = () => {
    const navigate = useNavigate();

    const linkToForWho = () => {
        navigate("/for-who");
    };

    const linkToProducts = () => {
        navigate("/products");
    };

    const linkToKeunggulan = () => {
        navigate("/keunggulan");
    };

    const linkToTestimoni = () => {
        navigate("/testimoni");
    };

    return(
        <div className="w-full xl:pt-30 xl:pb-10 h-auto" style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto">
                <div className="px-6 lg:px-20">
                    <div className='flex flex-col justify-between items-center gap-8'>
                        <h2 className='font-bold text-4xl xl:text-5xl xl:max-w-2xl text-primary text-center leading-tight'>Siap Bantu Skor TOEFL Kamu Naik Sekarang Juga!</h2>

                        <p className='text-primary font-normal text-xl text-center'>Toeflin.Kuy — Solusi praktis untuk skor TOEFL tinggi, tanpa stres, tanpa ribet.</p>
                    
                        <ul className="mt-10 flex flex-wrap gap-6 justify-center items-center text-primary text-lg font-normal">
                            <li onClick={linkToForWho}>Untuk Siapa?</li>
                            <li onClick={linkToProducts}>Produk</li>
                            <li onClick={linkToKeunggulan}>Keunggulan</li>
                            <li onClick={linkToTestimoni}>Testimoni</li>
                        </ul>
                    
                        <p className='text-primary font-normal text-lg text-center mb-5'>© 2025 toeflin.kuy. All rights reserved. Developed by <a href="https://www.rendiero.dev" className="font-bold">rendiero.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;