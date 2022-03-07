import React, { useState, useEffect } from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);
  
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
        console.log("window.scrollY", window.scrollY)
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    return () => {
        window.removeEventListener("scroll", () => {

        })
    }
  }, [])

  return ( 
    <nav className={`nav ${show && "nav__black"}`}>
        <img alt='Netflix logo' className='nav__logo' onClick={()=> window.location.reload()} src="https://w.namu.la/s/984a3a524c3a76ef69967a3538f0b655d9e4a9b948314bd8d57f34a1502753104f1613f356c08d4352cdfad86bbea9cd56b2133ea5c9c7a57f1c065b1048cb5b999494f0fe88201304c91686aa79719fc2e29036900f820a6f5dadb00ebe4525"/> 
        <img alt="User logged" className='nav__avartar' src="https://w.namu.la/s/443e78b28b5d7ed200c3e0177ca236a7dd29401234390a2235d01891ed289e83028b196adb1dee1da5532eb5f1eb2ba8198565de9ac87f33e8fd421e63106d02675755c86ce4862b22df1dbd61285e8cee484a2908eeade37dc7435cfdf07b0bcfceb1c9444b2971f06f5e07c9b7a1d2" />
    </nav>
  );
}

