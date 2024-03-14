import { FaAlignJustify } from "react-icons/fa";
import Logo from "../images/logo.png";
import { useState } from "react";


const Menu = () => {

    const [mobile, setMobile] = useState(false);

    function show() {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    return (
        <div className="flex items-center h-28 w-screen justify-between fixed z-10 text-white bg-[#15304c]">
            <div className="w-56 pl-9">
                <img src={Logo} alt="logo" />
            </div>

            <nav className="max-sm:absolute max-sm:top-28 max-sm:w-full bg-[#15304c]">
                <ul className={` text-center max-sm:pb-8 max-sm:flex-col
                 max-sm:gap-4 bg-[#15304c] gap-4 sm:mr-12 sm:flex ${mobile ? "max-sm:flex" : "max-sm:hidden"}`}>
                    <li><a href="#">Domů</a></li>
                    <li><a href="#">O nás</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>

            <div className="mr-14 text-2xl sm:hidden">
                <button onClick={show}>
                    <FaAlignJustify />
                </button>
            </div>
        </div >
    )
}

export default Menu