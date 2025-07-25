const Button = ({ buttonText, buttonLink, customStyles }) => {
    return (
        <button className={`bg-bgbutton text-primary font-bold py-2 px-3 rounded-md border-2 border-r-5 border-b-5 cursor-pointer border-primary active:border-b-2 active:border-r-2 ${customStyles}`}>
            <a href={buttonLink}>{buttonText}</a>
        </button>
    );
}

export default Button;
