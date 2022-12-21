import { useEffect, useRef } from 'react';
import '../styles/Header.css'
import styleVars from "./appStyleVariables"

const Header = () => {
    const logoRef = useRef(null);
    const unionBtnsRef = useRef(null);

    useEffect(() => {
        logoRef.current.addEventListener('mouseover', () => {
            unionBtnsRef.current.style.opacity = 1;
        })

        window.addEventListener('mousemove', (e) => {
            let y = e.pageY;

            if (y > styleVars.header_height + styleVars.union_btns_height) {
                unionBtnsRef.current.style.opacity = 0;
            }
        })
    })

    return (
        <header className="header">
            <a href='/' className="logo" ref={logoRef}>
                <img src="images/logo.png" alt="logo.png" />
            </a>
            <div className="union-btns" ref={unionBtnsRef}>
                <a href="https://t.me/nntelbot" className='union-btn' rel='noreferrer' target={"_blank"}>
                    <img src="svg/telegram.svg" alt="telegram icon"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
