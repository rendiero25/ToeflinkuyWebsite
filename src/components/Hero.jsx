import worldBG from '../assets/worldbg.png';
import HeroImg from '../assets/heroimage.png';
import Button from '../components/Button';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <motion.div 
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className='relative'>
                <div className='w-full h-[50rem] xl:h-auto'>
                    <img src={worldBG} alt="World Background" className="w-full h-full object-cover" />
                </div>
            
                <div className='absolute top-0 left-0 w-full'>
                    <div className='container mx-auto'>
                        <div className='px-6 lg:px-20'>
                            <div className='flex flex-col xl:flex-row justify-between items-center gap-2'>
                                <motion.div 
                                    className='xl:w-1/2 flex flex-col justify-between items-center xl:items-start gap-4'
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <h1 className='text-primary font-bold text-4xl text-center xl:text-left xl:text-6xl leading-tight'>
                                        <span itemProp="name" className='text-2xl text-primary'>Joki TOEFL & Jasa Sertifikat IELTS Terpercaya</span> <br /> 
                                        Nilai TOEFL Tinggi Tanpa Ribet? <br className='hidden xl:flex'/> 
                                        Biar Kami Yang Urus!
                                    </h1>
                                
                                    <p className='text-primary font-normal text-xl text-center xl:text-left mb-8'>
                                        Capek belajar tapi nilai TOEFL tetap nggak naik-naik? Atau nggak 
                                        punya waktu buat ngulang tes berkali-kali? Tenang, <strong>jasa joki TOEFL</strong> dan 
                                        <strong> jasa sertifikat TOEFL IELTS</strong> terpercaya kami siap bantu kamu dapat skor TOEFL impian dengan 
                                        aman, cepat, dan tanpa stres! Cocok untuk mahasiswa, beasiswa LPDP, CPNS, dan BUMN.
                                    </p>
                                    
                                    <Button 
                                        buttonLink={"#products"}
                                        buttonText={"Lihat Produk Kami"}
                                        customStyles={"text-xl"}/>
                                </motion.div>

                                <motion.div 
                                    className='xl:w-1/2'
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <img src={HeroImg} alt="Jasa joki TOEFL dan sertifikat IELTS terpercaya - Tim profesional Toeflin.Kuy siap membantu skor TOEFL IELTS tinggi" className="mt-8 xl:mt-0 w-full h-auto object-cover" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero;