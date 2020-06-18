import React from 'react'
import "./home-page.scss"
import Row1 from './rows/row-1';
import Row2 from './rows/row-2';
import Row3 from './rows/row-3';

const HomePage = () => {
   return (
       <main>
                  <section className="container-fluid ">
                <Row1 />
                <Row2 />
                <Row3 />
                <h5>created by @ratibordas. Not for commercial use.</h5>
            </section>  
        </main>
    )
}



export default HomePage;