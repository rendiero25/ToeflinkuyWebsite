import bgAdvatages from '../assets/worldbg2.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';   
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
import Icon5 from '../assets/icon5.png';

const Advantages = () => {
    return(
        <div className="bg-bgbutton w-full py-10 -mt-20" style={{ backgroundImage: `url(${bgAdvatages})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="container mx-auto">
                <div className="px-6 lg:px-20">
                    <div className='flex flex-col justify-between items-center gap-5 py-20'>
                        <h2 className="text-3xl font-bold text-primary text-center">Keunggulan Layanan Kami</h2>
                    
                        <div className='flex flex-col justify-between items-center gap-8'>
                            <div className='flex flex-col xl:flex-row justify-between items-center gap-12 mt-15'>
                                <div className='flex flex-col justify-between items-center xl:items-start gap-4'>
                                    <img src={Icon1} alt="icon1" className='w-13'/>
                                    <h4 className='text-primary font-bold text-xl'>Aman & Terpercaya</h4>
                                    <p className='text-primary font-normal text-lg text-center xl:text-left'>
                                        Sudah terbukti bantu ratusan klien lulus dengan skor tinggi, semua dikerjakan 
                                        olehtim profesional berpengalaman.
                                    </p>
                                </div>

                                <div className='flex flex-col justify-between items-center gap-4'>
                                    <img src={Icon2} alt="icon2" className='w-13'/>
                                    <h4 className='text-primary font-bold text-xl'>Privasi Terjamin</h4>
                                    <p className='text-primary font-normal text-lg text-center'>
                                        Data dan identitas kamu kami jaga 100%. Kami paham pentingnya 
                                        keamanan dan kerahasiaan.
                                    </p>
                                </div>

                                <div className='flex flex-col justify-between items-center xl:items-end gap-4'>
                                    <img src={Icon3} alt="icon3" className='w-13'/>
                                    <h4 className='text-primary font-bold text-xl'>Garansi Skor Sesuai Target</h4>
                                    <p className='text-primary font-normal text-lg text-center xl:text-right'>
                                        Kamu tinggal tentukan target skornya, kami yang kerjakan hingga 
                                        tercapai. Kalau tidak tercapai, uang kembali!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-between items-center gap-8 -mt-5 2xl:max-w-4xl'>
                            <div className='flex flex-col xl:flex-row justify-between items-center gap-12 mt-15'>
                                <div className='flex flex-col justify-between items-center gap-4'>
                                    <img src={Icon4} alt="icon4" className='w-13'/>
                                    <h4 className='text-primary font-bold text-xl'>Bisa Untuk Semua Platform</h4>
                                    <p className='text-primary font-normal text-lg text-center'>
                                        TOEFL ITP, TOEFL Prediction, sampai sertifikat instansi — kami siap bantu di 
                                        berbagai jenis tes TOEFL.
                                    </p>
                                </div>

                                <div className='flex flex-col justify-between items-center gap-4'>
                                    <img src={Icon5} alt="icon5" className='w-13'/>
                                    <h4 className='text-primary font-bold text-xl'>Proses Cepat & Tanpa Ribet</h4>
                                    <p className='text-primary font-normal text-lg text-center'>
                                        Konsultasi gratis, pilih paket, bayar, tinggal tunggu hasil. Semudah itu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages