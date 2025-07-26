import { motion } from 'motion/react';

const Button = ({ buttonText, buttonLink, customStyles }) => {
    return (
        <motion.button 
            className={`bg-bgbutton text-primary font-bold py-2 px-3 rounded-md border-2 border-r-5 border-b-5 cursor-pointer border-primary active:border-b-2 active:border-r-2 ${customStyles}`}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(50, 67, 85, 0.2)"
            }}
            whileTap={{ 
                scale: 0.95,
                boxShadow: "0 2px 8px rgba(50, 67, 85, 0.2)"
            }}
            transition={{ 
                duration: 0.2,
                ease: "easeInOut"
            }}
        >
            <a href={buttonLink}>{buttonText}</a>
        </motion.button>
    );
}

export default Button;
