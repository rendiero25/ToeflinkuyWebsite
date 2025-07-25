import worldBG from '../assets/worldbg.png';
import HeroImg from '../assets/heroimage.png';
import Button from '../components/Button';

const Hero = () => {
    return (
        <div className="">
            <div className='relative'>
                <div className='w-full h-[50rem] xl:h-auto'>
                    <img src={worldBG} alt="World Background" className="w-full h-full object-cover" />
                </div>
            
                <div className='absolute top-0 left-0 w-full'>
                    <div className='container mx-auto'>
                        <div className='px-6'>
                            <div className='flex flex-col xl:flex-row justify-between items-center gap-2'>
                                <div className='xl:w-1/2 flex flex-col justify-between items-center xl:items-start gap-4'>
                                    <h1 className='text-primary font-bold text-4xl text-center xl:text-left xl:text-6xl leading-tight'>Nilai TOEFL Tinggi <br /> Tanpa Ribet? Biar Kami <br className='hidden xl:flex'/> Yang Urus!</h1>
                                
                                    <p className='text-primary font-normal text-xl text-center xl:text-left mb-8'>Capek belajar tapi nilai TOEFL tetap nggak naik-naik? Atau nggak 
                                        punya waktu buat ngulang tes berkali-kali? Tenang, toeflin.kuy 
                                        siap bantu kamu dapat skor TOEFL impian dengan aman, cepat, dan 
                                        tanpa stres!
                                    </p>
                                    
                                    <Button 
                                        buttonLink={"#produk"}
                                        buttonText={"Lihat Produk Kami"}/>
                                </div>

                                <div className='xl:w-1/2'>
                                    <img src={HeroImg} alt="Hero Image" className="mt-8 xl:mt-0 w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;