import { RiMenu5Fill } from "react-icons/ri";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();

    const linkToForWho = () => {
        navigate('/#for-who');
    }

    const linkToProducts = () => {
        navigate('/#products');
    }

    const linkToKeunggulan = () => {
        navigate('/#keunggulan');
    }

    const linkToTestimoni = () => {
        navigate('/#testimoni');
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="container mx-auto">
            <div className="py-2 xl:py-4 px-6">
                <div className="flex flex-row justify-between items-center gap-2">
                    <h1 className="text-lg xl:text-2xl font-bold text-center my-4 text-primary">toeflin.kuy</h1>
                
                    <ul className="hidden xl:flex flex-row gap-6 justify-between items-center text-primary text-lg font-normal">
                        <li onClick={linkToForWho}>Untuk Siapa?</li>
                        <li onClick={linkToProducts}>Produk</li>
                        <li onClick={linkToKeunggulan}>Keunggulan</li>
                        <li onClick={linkToTestimoni}>Testimoni</li>
                    </ul>

                    <div className="xl:hidden">
                        <RiMenu5Fill className="text-primary size-7" onClick={toggleMenu}/>
                    </div>

                    <Button 
                        buttonText={"Konsultasi Gratis!!"}
                        buttonLink={"https://wa.me/6287783047511?text=Halo%20Toeflin.kuy%2C%20saya%20ingin%20konsultasi%20gratis!"}
                    />
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-white via-bgbutton to-white shadow-lg z-10">
                    <ul className="flex flex-col justify-between items-center gap-6 py-15 text-primary text-4xl font-bold">
                        <li onClick={linkToForWho}>Untuk Siapa?</li>
                        <li onClick={linkToProducts}>Produk</li>
                        <li onClick={linkToKeunggulan}>Keunggulan</li>
                        <li onClick={linkToTestimoni}>Testimoni</li>
                    </ul>
                </div>
            )}
            
        </header>
    );
}

export default Header;