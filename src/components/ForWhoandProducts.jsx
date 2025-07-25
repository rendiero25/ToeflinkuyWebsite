import { IoIosPeople } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../components/Button";

const ForWhoandProducts = () => {

    const [dataFetch, setDataFetch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/data.json");
                if (!response.ok) {
                    throw new Error("Connection to fetch data failed");
                }

                const data = await response.json();
                setDataFetch(data);
            }

            catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    
    return(
        <div className="w-full h-auto sm:mt-30 md:mt-60 lg:mt-70 xl:mt-20 2xl:mt-0">
            <div className="relative w-full flex flex-col justify-between items-center">
                <div className="bg-white w-full h-auto min-h-[20rem] xl:min-h-27.5"></div>
                <div className="bg-blue w-full h-auto"></div>

                <div className="absolute left-0 top-0 w-full z-20">
                    <div className="container mx-auto">
                        <div className="px-6 lg:px-20 flex flex-col gap-8 xl:gap-12 justify-between items-center">                    
                            <div id="for-who"  className="flex flex-col xl:flex-row gap-12 justify-between p-8 h-auto xl:h-55 items-center bg-bgbutton rounded-2xl border-2 border-primary border-r-15 border-b-15">
                                <div className="flex flex-col justify-center items-center gap-2 xl:w-1/4 h-full ">
                                    <IoIosPeople className="text-primary size-18 xl:size-20" />
                                    <p className="text-primary font-normal text-lg 2xl:text-xl text-center">Mahasiswa yang butuh nilai TOEFL buat syarat wisuda</p>
                                </div>

                                <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                                <div className="flex flex-col justify-center items-center gap-2 xl:w-1/4 h-full">
                                    <SiGooglescholar className="text-primary size-10 2xl:size-13" />
                                    <p className="text-primary font-normal text-lg text-center ">Fresh graduate yang lagi daftar kerja / CPNS</p>
                                </div>

                                <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                                <div className="flex flex-col justify-center items-center gap-2 xl:w-1/4 h-full">
                                    <IoIosDocument className="text-primary size-10 2xl:size-13" />
                                    <p className="text-primary font-normal text-lg text-center">Pencari Beasiswa dalam/luar negeri</p>
                                </div>

                                <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                                <div className="flex flex-col justify-center items-center gap-2 xl:w-1/4 h-full">
                                    <FaBookReader className="text-primary size-10 2xl:size-13" />
                                    <p className="text-primary font-normal text-lg text-center">Kamu yang udah belajar tapi tetap gagal naik skor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="products" className="bg-blue w-full pt-[38rem] 2xl:pt-10 pb-20 xl:pb-30">
                    <div className="container mx-auto">
                        <div className="px-6 lg:px-20">
                            <div id="products" className="mt-6 xl:mt-8 flex flex-col justify-between items-center gap-5">
                                <div className="flex flex-col xl:flex-row justify-between items-center gap-2 w-full 2xl:mt-40">
                                    <h2 className="text-3xl font-bold text-primary text-center xl:text-left xl:w-1/2">Pilihan Layanan TOEFL Kami</h2>
                                    <p className="text-primary font-normal text-xl text-center xl:text-left xl:w-1/2">Pilih paket yang paling sesuai dengan 
                                        kebutuhan kamu. Semua dikerjakan oleh tim profesional, dengan hasil real & terbukti!
                                    </p>
                                </div>

                                <div className="bg-blue mt-15">
                                    <div className="columns-1 xl:columns-2 2xl:columns-3 gap-8 space-y-8">
                                        {dataFetch.map((product) => (
                                            <div key={product.id} className="bg-bgbutton rounded-2xl border-2 border-primary border-r-10 border-b-10 p-8 break-inside-avoid mb-8">
                                                <div className="flex flex-col justify-between items-start gap-6">
                                                    <img src={product.image} alt={product.name} />

                                                    <div className="flex flex-col xl:flex-row justify-between items-left gap-4">
                                                        <h3 className="text-primary font-bold text-2xl xl:text-left">{product.name}</h3>
                                                        <div className="flex flex-row items-left gap-2">
                                                            <FaStar className="text-yellow-500 size-6" />
                                                            <FaStar className="text-yellow-500 size-6" />
                                                            <FaStar className="text-yellow-500 size-6" />
                                                            <FaStar className="text-yellow-500 size-6" />
                                                            <FaStar className="text-yellow-500 size-6" />
                                                        </div>
                                                    </div>

                                                    <h3 className="text-primary font-bold text-2xl text-left w-full">{product.price}</h3>

                                                    <div className="flex-grow">
                                                        {product.description ? (
                                                            <p dangerouslySetInnerHTML={{ __html: product.description }} className="text-primary font-medium text-xl text-left"></p>
                                                        ) : (
                                                            <p className="text-primary font-medium text-xl text-left opacity-50 italic">Hubungi kami untuk informasi lebih lanjut</p>
                                                        )}
                                                    </div>

                                                    <Button 
                                                        buttonText={"Order Sekarang!"}
                                                        buttonLink={"https://wa.me/6287783047511?text=Halo%20Toeflin.kuy%2C%20saya%20ingin%20konsultasi%20gratis!"}
                                                        customStyles={"bg-primary text-white text-2xl px-6 py-3 mt-6"}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ForWhoandProducts;