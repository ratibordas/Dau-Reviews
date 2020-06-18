import React, {useEffect} from 'react'
import "./preloader.scss"
import dau from "../../images/dau.svg"
import { gsap } from "gsap";



 const Preloader = ()  => {
    const preloaderFunc = () => {
     gsap.to(".main__preloader", { duration: 3.5, y: -1000, delay: 3 })
     gsap.to(".main__preloader__glitch", { display: "none", delay: 2.5 })
}

    
     useEffect(() => {
        preloaderFunc()  
    })
    
 

    


  return (
    <div className="main__preloader" >
                <div className="main__preloader__glitch">
                    <img className="main__preloader__img" src={dau} alt="дау" type="svg" />
                </div>
            </div>
   )



     




  


 }


export default Preloader;