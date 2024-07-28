"use client";
import { useState } from 'react'

import './Faqs.css'

function Faqs(){

    let [toggle1, setToggle1] = useState(false);
    const handleClick1 = () => {
        setToggle1(!toggle1);
    }
    let [toggle2, setToggle2] = useState(false);
    const handleClick2 = () => {
        setToggle2(!toggle2);
    }
    let [toggle3, setToggle3] = useState(false);
    const handleClick3 = () => {
        setToggle3(!toggle3);
    }
    let [toggle4, setToggle4] = useState(false);
    const handleClick4 = () => {
        setToggle4(!toggle4);
    }
    let [toggle5, setToggle5] = useState(false);
    const handleClick5 = () => {
        setToggle5(!toggle5);
    }
    let [toggle6, setToggle6] = useState(false);
    const handleClick6 = () => {
        setToggle6(!toggle6);
    }
    let [toggle7, setToggle7] = useState(false);
    const handleClick7 = () => {
        setToggle7(!toggle7);
    }
    let [toggle8, setToggle8] = useState(false);
    const handleClick8 = () => {
        setToggle8(!toggle8);
    }
    

    return (
        <>
        <div className="faqs-body">
            
            <div className="nav-cover"></div>
            <img src='/Mun-people.jpeg' className="faqs-bg"/>
            <div className="faqs-hero">
                <div className="faqs-logo-mun">
                    <img src='/Logo-mun-gold.png' className="faqs-logo"></img>
                </div>
            </div>
            <div className="faqs-title">FAQS</div>
            <div className="faqs-date">01 June - 05 June 2024</div>

            <div className="faqs">
                <div className={toggle1 ? "faq-active" : "faq"} onClick={handleClick1}>
                    <div className="faq-q">Q.1  Who can register?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">Anyone undergoing formal education is eligible.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle2 ? "faq-active" : "faq"} onClick={handleClick2}>
                    <div className="faq-q">Q.2  Is there an age restriction for a delegate?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">Yes, you should be 15 years or older.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle3 ? "faq-active" : "faq"} onClick={handleClick3}>
                    <div className="faq-q">Q.3  Do I need prior experience?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">No prior experience is required to register for the conference.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle4 ? "faq-active" : "faq"} onClick={handleClick4}>
                    <div className="faq-q">Q.4  What committees are being stiulated?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">Anyone undergoing formal education is eligible.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle5 ? "faq-active" : "faq"} onClick={handleClick5}>
                    <div className="faq-q">Q.5  Is prior experience required for any of the committees?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">No prior experience is required for any of the committees.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle6 ? "faq-active" : "faq"} onClick={handleClick6}>
                    <div className="faq-q">Q.6  For how  many committees can one apply?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">One can apply for a maximum of three committees.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle7 ? "faq-active" : "faq"} onClick={handleClick7}>
                    <div className="faq-q">Q.7  How will the conference be conducted?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">NIT Patna MUN 2024 will be conducted offline at the NIT Patna Campus.</div>
                    <div className='plus'>+</div>
                </div>
                <div className={toggle8 ? "faq-active" : "faq"} onClick={handleClick8}>
                    <div className="faq-q">Q.1  Who can register?</div>
                    <div className="faq-line"></div>
                    <div className="faq-a">Anyone undergoing formal education is eligible.</div>
                    <div className='plus'>+</div>
                </div>
            </div>
            <img src="/Logo-mun-gold.png" className="faq-bg1" />
            <img src="/Logo-mun-gold.png" className='faq-bg2' />
        </div>
        
        </>
    )
}

export default Faqs