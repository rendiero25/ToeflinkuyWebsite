import { RiMenu5Fill } from "react-icons/ri";
import Button from "../components/Button";
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {

    const linkToForWho = () => {
        const element = document.getElementById('for-who');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false); // Close mobile menu
    }

    const linkToProducts = () => {
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false); // Close mobile menu
    }

    const linkToKeunggulan = () => {
        const element = document.getElementById('keunggulan');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false); // Close mobile menu
    }

    const linkToTestimoni = () => {
        const element = document.getElementById('testimoni');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false); // Close mobile menu
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <motion.header 
            className="container mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="py-2 xl:py-4 px-6 lg:px-20">
                <div className="flex flex-row justify-between items-center gap-2">
                    <motion.h1 
                        className="text-lg xl:text-2xl font-bold text-center my-4 text-primary"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        <a href="/">toeflin.kuy</a>
                    </motion.h1>
                
                    <motion.ul 
                        className="hidden xl:flex flex-row gap-6 justify-between items-center text-primary text-lg font-normal cursor-pointer"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <li onClick={linkToForWho}>Untuk Siapa?</li>
                        <li onClick={linkToProducts}>Produk</li>
                        <li onClick={linkToKeunggulan}>Keunggulan</li>
                        <li onClick={linkToTestimoni}>Testimoni</li>
                    </motion.ul>

                    <motion.div 
                        className="xl:hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <RiMenu5Fill className="text-primary size-7" onClick={toggleMenu}/>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <Button 
                            buttonText={"Konsultasi Gratis!!"}
                            buttonLink={"https://wa.me/6287783047511?text=Halo%20Toeflin.kuy%2C%20saya%20ingin%20konsultasi%20gratis!"}
                        />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="absolute top-16 left-0 w-full bg-gradient-to-b from-white via-bgbutton to-white shadow-lg z-10"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ul className="flex flex-col justify-between items-center gap-6 py-15 text-primary text-4xl font-bold">
                            <motion.li 
                                onClick={linkToForWho}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                            >
                                Untuk Siapa?
                            </motion.li>
                            <motion.li 
                                onClick={linkToProducts}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                            >
                                Produk
                            </motion.li>
                            <motion.li 
                                onClick={linkToKeunggulan}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                            >
                                Keunggulan
                            </motion.li>
                            <motion.li 
                                onClick={linkToTestimoni}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                            >
                                Testimoni
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </motion.header>
    );
}

export default Header;