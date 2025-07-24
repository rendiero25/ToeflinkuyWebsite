import { RiMenu5Fill } from "react-icons/ri";
import Button from "../components/Button";

const Header = () => {
    return (
        <header className="container mx-auto">
            <div className="py-2 xl:py-4 px-6">
                <div className="flex flex-row justify-between items-center gap-2">
                    <h1 className="text-lg xl:text-2xl font-bold text-center my-4 text-primary">toeflin.kuy</h1>
                
                    <ul className="hidden xl:flex flex-row gap-6 justify-between items-center text-primary text-lg font-normal">
                        <li>Keunggulan</li>
                        <li>Untuk Siapa?</li>
                        <li>Produk</li>
                        <li>Kenapa Kami</li>
                        <li>Testimoni</li>
                    </ul>

                    <div className="xl:hidden">
                        <RiMenu5Fill className="text-primary size-7"/>
                    </div>

                    <Button 
                        buttonText={"Konsultasi Gratis!!"}
                        buttonLink={"https://wa.me/6287783047511?text=Halo%20Toeflin.kuy%2C%20saya%20ingin%20konsultasi%20gratis!"}
                    />
                </div>
            </div>
            
        </header>
    );
}

export default Header;