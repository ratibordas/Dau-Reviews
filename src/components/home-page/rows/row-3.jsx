import React from 'react'
import natasha from '../../../images/7.png';
import degeneration from '../../../images/8.jpg';
import nikitaTanya from '../../../images/11.jpg';
import {  Link } from 'react-router-dom'



const Row3 = () => {


    return (
        <div className="row no-gutters" style={{ borderBottom: '1px solid rgba(0,0,0,.15)', boxShadow: '0 0 7px rgba(0,0,0,.15)' }}>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
               <Link className="main__content__link" to="/Dau-Reviews/article/article-natasha">
                <figure>
                    <img src={natasha} className="main__content__img-small" alt="дау наташа" />
                    <figcaption>Наташа</figcaption>
                    </figure>
                    </Link>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                 <div className="main__content__text">
                    <h2>Смотреть "Дау"</h2>
                    <p>Онлайн-кинотеатр “Дау”, где можно посмотреть все доступные на сегодняшний день фильмы проекта.
                        К сожалению, просмотр с мобильных устройств не поддерживается.<a href="https://www.dau.com/ru/">Перейти в кинотеатр</a></p>
                    <hr className="main__content__hr"/>
        
        </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <figure>
                    <img src={degeneration} className="main__content__img-small" alt="дау вырождение" />
                    <figcaption>Дегенерация</figcaption>
                </figure>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <figure>
                    <img src={nikitaTanya} className="main__content__img-small" alt="дау никита таня" />
                    <figcaption>Никита Таня</figcaption>
                </figure>
            </div>




        </div>
    )



}


export default Row3;