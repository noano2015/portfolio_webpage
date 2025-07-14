import { useState,useEffect } from 'react';
import './Header.css'
import WebNav from './WebNav';

function Header(){
    const [hideHeader, setHideHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setHideHeader(true); 
        } else {
            setHideHeader(false); 
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return(
        <>
            <header className={`${hideHeader ? 'Hide' : 'Header'}`}>
                <h1>The Engineer's Kernel</h1>
                <WebNav/>
            </header>
            
        </>

    );

}


export default Header;