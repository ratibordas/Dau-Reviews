import React from 'react'
import newMan from '../../../images/1.jpg';
import treeDays from '../../../images/2.jpg';
import noraMother from '../../../images/3.jpg';
import { Link} from 'react-router-dom'



const Row1 = () => {



    return (

        <div className="row no-gutters">
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                <div className="main__content__text">
                    <h2>DAU Ильи Хржановского</h2>
                    <p>О проекте “Дау” Ильи Хржановского — уникальном эксперименте, 15 годах разработки, 700 часах отснятого материала,
                        реконструкции советского тоталитаризма и тысячах реальных людей, живших в декорациях Института годами. <a className="main__content__text__link"
                            href="https://kinoart.ru/opinions/phantom-of-dau" >О проекте</a></p>
                    
                    <hr className="main__content__hr"/>
                    
                    
                </div>

            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                <figure >
                    <img src={newMan} className="main__content__img-small" alt='дау новый человек' />
                    <figcaption>Новый Человек</figcaption>
                </figure>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <figure>
                    <img src={treeDays} className="main__content__img-small" alt="дау три дня" />
                    <figcaption>Три Дня</figcaption>
                </figure>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <figure>
                    <img src={noraMother} className="main__content__img-small" alt="дау нора мама" />
                    <figcaption>Нора Мама</figcaption>
                </figure>
            </div>
        </div>

    )

}



export default Row1;