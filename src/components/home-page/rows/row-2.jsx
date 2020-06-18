import React from 'react'
import bravePeople from '../../../images/4.jpg';
import katyaTanya from '../../../images/10.jpg';
import stringTheory from '../../../images/6.jpg';
import { Link } from 'react-router-dom'



const Row2 = () => {


    return (
    
        <div className="row no-gutters">
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <figure>
          <img src={bravePeople} className="main__content__img-small" alt="дау смелые люди" />
          <figcaption>Смелые Люди</figcaption>
        </figure>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <figure>
                    <img src={katyaTanya} className="main__content__img-small" alt="дау катя таня" />
                    <figcaption>Катя Таня</figcaption>
        </figure>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <figure>
                    <img src={stringTheory} className="main__content__img-small" alt="дау теория струн" />
                    <figcaption>Теория Струн</figcaption>
        </figure>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
         <div className="main__content__text">
                    <h2>Рецензии на фильмы проекта "Дау"</h2>
            <p>Вы можете прочитать рецензию на интересующий вас фильм, кликнув на карточку.
              Также, эти и другие рецензии, доступны на странице блога "The Cinema Therapy".<a href="https://medium.com/cinema-therapy">Перейти на Medium</a> </p>
                    <hr className="main__content__hr"/>
        
        </div>
      </div>
    </div>





)






}



export default Row2;