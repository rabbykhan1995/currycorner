"use client"
import { FaArrowUp } from "react-icons/fa6";
import "./MovingArrow.css";
import { useEffect, useState } from "react";

const MovingArrow = ()=> {
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    },[])

    const MoveToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <button className={`Button ${visible?"show":"hidden"}`} onClick={MoveToTop}>
            <FaArrowUp className="Arrow"/>
        </button>
    )
}

export default MovingArrow;