import Button from '../components/Button';
import BannerBg from '../assets/bannerbg.png';

const Banner = () => {
    return(
        <div id="banner" className="w-full py-10 xl:pt-30 bg-gradient-to-b from-blue to-white">
            <div className="container mx-auto">
                <div className="px-6 lg:px-20">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-12">

                        <img src={BannerBg} alt="Banner Background" className="w-[30rem] h-auto object-cover"/>

                        <div className="xl:w-1/2 flex flex-col 2xl:max-w-xl justify-center items-center xl:items-start gap-2">
                            <h2 className="text-3xl font-bold text-primary text-center xl:text-left leading-tight">
                                Masih Bingung? Gak Masalah!
                            </h2>

                            <p className="text-primary font-normal text-xl xl:text-2xl text-center xl:text-left leading-relaxed">
                                Hubungi kami, jelaskan kebutuhan kamu, dan dapatkan solusi terbaik tanpa dipaksa beli.
                            </p>
                        </div>

                        <Button 
                            buttonText={"Konsultasi Gratis!"}
                            buttonLink={"https://wa.me/6287783047511?text=Halo%20Toeflin.kuy%2C%20saya%20ingin%20konsultasi%20gratis!"}
                            customStyles={"text-lg xl:text-xl px-6 py-4"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;