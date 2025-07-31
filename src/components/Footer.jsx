import { motion } from 'motion/react';
import FooterBg from '../assets/worldbg.png';

const Footer = () => {
    const linkToForWho = () => {
        const element = document.getElementById('for-who');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const linkToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const linkToKeunggulan = () => {
        const element = document.getElementById('keunggulan');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const linkToTestimoni = () => {
        const element = document.getElementById('testimoni');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <motion.div 
            className="w-full xl:pt-30 xl:pb-10 h-auto" 
            style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="container mx-auto">
                <div className="px-6 lg:px-20">
                    <div className='flex flex-col justify-between items-center gap-8'>
                        <motion.h2 
                            className='font-bold text-4xl xl:text-5xl xl:max-w-2xl text-primary text-center leading-tight'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Siap Bantu Skor TOEFL IELTS Kamu Naik Sekarang Juga!
                        </motion.h2>

                        <motion.p 
                            className='text-primary font-normal text-xl text-center'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Toeflin.Kuy — Solusi praktis <strong>jasa joki TOEFL</strong> dan <strong>jasa sertifikat IELTS</strong> untuk skor tinggi, tanpa stres, tanpa ribet.
                        </motion.p>
                    
                        <motion.ul 
                            className="mt-10 flex flex-wrap gap-6 justify-center items-center text-primary text-lg font-normal cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <li onClick={linkToForWho}>Untuk Siapa?</li>
                            <li onClick={linkToProducts}>Produk</li>
                            <li onClick={linkToKeunggulan}>Keunggulan</li>
                            <li onClick={linkToTestimoni}>Testimoni</li>
                        </motion.ul>
                    
                        <motion.p 
                            className='text-primary font-normal text-lg text-center mb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            © 2025 toeflin.kuy. All rights reserved. Developed by <a href="https://www.rendiero.dev" className="font-bold">rendiero.</a>
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer;