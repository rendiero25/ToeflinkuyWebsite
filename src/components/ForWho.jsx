import { IoIosPeople } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const ForWho = () => {
    return(
        <div className="relative w-full h-auto">
            <div className="flex flex-col justify-between items-center h-auto">
                <div className="bg-white w-full h-27.5"></div>
                <div className="bg-blue w-full h-27.5"></div>
            </div>

            <div className="absolute left-0 top-0 w-full">
                <div className="container mx-auto">
                    <div className="px-6">
                        <div className="flex flex-col xl:flex-row h-55 gap-12 justify-between p-8 items-center bg-bgbutton rounded-2xl border-2 border-primary border-r-15 border-b-15">
                            <div className="flex flex-col justify-between items-center">
                                <IoIosPeople className="text-primary size-20" />
                                <p className="text-primary font-normal text-xl text-center">Mahasiswa yang butuh nilai <br /> TOEFL buat syarat wisuda</p>
                            </div>

                            <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                            <div className="flex flex-col justify-between items-center">
                                <SiGooglescholar className="text-primary size-20" />
                                <p className="text-primary font-normal text-xl text-center">Fresh graduate yang lagi <br /> daftar kerja / CPNS</p>
                            </div>

                            <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                            <div className="flex flex-col justify-between items-center">
                                <IoIosDocument className="text-primary size-20" />
                                <p className="text-primary font-normal text-xl text-center">Pencari Beasiswa dalam/luar <br /> negeri</p>
                            </div>

                            <div className="border-1 xl:border-2 rounded-full border-primary w-35 xl:w-1 xl:h-35"></div>

                            <div className="flex flex-col justify-between items-center">
                                <FaBookReader className="text-primary size-20" />
                                <p className="text-primary font-normal text-xl text-center">Kamu yang udah belajar <br /> tapi tetap gagal naik skor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForWho;