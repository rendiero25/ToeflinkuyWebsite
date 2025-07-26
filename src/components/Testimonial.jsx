import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    // Data testimonial dummy
    const testimonials = [
        {
            id: 1,
            testimony: "Alhamdulillah, berkat bantuan toeflin.kuy saya berhasil mendapatkan skor TOEFL 550! Prosesnya sangat mudah dan hasilnya memuaskan. Recommended banget buat yang butuh skor TOEFL cepat!",
            name: "Sarah Wijaya",
            age: 23,
            city: "Jakarta",
            photo: "/images/testimonial1.jpg"
        },
        {
            id: 2,
            testimony: "Awalnya ragu, tapi setelah mencoba layanan mereka, hasilnya luar biasa! Skor TOEFL saya naik drastis dari 450 jadi 580. Tim profesional dan terpercaya!",
            name: "Ahmad Rizki",
            age: 25,
            city: "Bandung",
            photo: "/images/testimonial2.jpg"
        },
        {
            id: 3,
            testimony: "Pelayanan sangat memuaskan! Prosesnya transparan dan hasilnya sesuai ekspektasi. Sekarang saya sudah lulus S2 berkat skor TOEFL yang memenuhi syarat.",
            name: "Maya Sari",
            age: 24,
            city: "Surabaya",
            photo: "/images/testimonial3.jpg"
        },
        {
            id: 4,
            testimony: "Fast response dan hasil yang berkualitas! Saya berhasil diterima di BUMN impian berkat sertifikat TOEFL dari toeflin.kuy. Terima kasih banyak!",
            name: "Dimas Pratama",
            age: 26,
            city: "Yogyakarta",
            photo: "/images/testimonial4.jpg"
        },
        {
            id: 5,
            testimony: "Proses sangat mudah dan cepat! Hanya dalam 1 hari sertifikat sudah jadi. Kualitas terjamin dan bisa dicek keasliannya. Highly recommended!",
            name: "Putri Indah",
            age: 22,
            city: "Semarang",
            photo: "/images/testimonial5.jpg"
        }
    ];

    return(
        <motion.div 
            id="testimoni" 
            className="w-full py-10 xl:py-20 bg-white"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="container mx-auto">
                <div className="px-6 lg:px-20">
                    <div className="flex flex-col justify-center items-center gap-12">
                        {/* Title & Subtitle */}
                        <motion.div 
                            className="flex flex-col xl:flex-row w-full gap-4 xl:gap-20 justify-center items-center text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="lg:w-1/2 2xl:w-auto text-3xl xl:text-4xl font-bold text-primary md:text-left">
                                Testimonial Klien Kami
                            </h2>
                            <p className="lg:w-1/2 2xl:w-auto text-primary font-normal text-xl xl:text-2xl max-w-4xl md:text-left">
                                Bukannya Kami yang Bilang, Tapi Mereka yang Udah Ngerasain Sendiri
                            </p>
                        </motion.div>

                        {/* Swiper Container */}
                        <motion.div 
                            className="w-full relative xl:px-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-custom',
                                    nextEl: '.swiper-button-next-custom',
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.swiper-pagination-custom',
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    1280: {
                                        slidesPerView: 2,
                                    },
                                }}
                                className="testimonial-swiper"
                                style={{ paddingBottom: '60px', paddingTop: '20px' }}
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className="bg-bgbutton rounded-2xl border-2 border-primary border-r-10 border-b-10 p-8 h-[27.5rem] xl:h-[23.5rem] flex flex-col gap-6">
                                            {/* Testimoni */}
                                            <div className="flex-grow">
                                                <p className="text-primary font-medium text-xl 2xl:text-2xl text-left leading-relaxed">
                                                    "{testimonial.testimony}"
                                                </p>
                                            </div>

                                            {/* Profile Section */}
                                            <div className="flex flex-row items-center gap-4 mt-4">
                                                {/* Photo */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-16 h-16 rounded-full bg-primary overflow-hidden border-2 border-primary">
                                                        <img 
                                                            src={testimonial.photo} 
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.parentElement.innerHTML = `<div class="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-xl">${testimonial.name.charAt(0)}</div>`;
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Name, Age, City */}
                                                <div className="flex flex-col justify-center">
                                                    <h4 className="text-primary font-bold text-xl">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-primary font-normal text-lg opacity-80">
                                                        {testimonial.age} tahun, {testimonial.city}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <div className="hidden -mt-10 swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-primary rounded-full xl:flex items-center justify-center cursor-pointer shadow-lg hover:bg-opacity-80 transition-all">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <div className="hidden -mt-10 swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-primary rounded-full xl:flex items-center justify-center cursor-pointer shadow-lg hover:bg-opacity-80 transition-all">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Custom Pagination */}
                            <div className="swiper-pagination-custom flex justify-center mt-8"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonial-swiper .swiper-pagination-bullet {
                    background-color: #324355;
                    opacity: 0.3;
                    width: 12px;
                    height: 12px;
                    margin: 0 6px;
                }
                .testimonial-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background-color: #324355;
                }
            `}</style>
        </motion.div>
    )
}

export default Testimonial;