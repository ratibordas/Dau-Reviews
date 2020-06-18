import React, {useEffect, useState} from 'react'
import marked from "marked";
import "../articles/article-style/article-style.scss"
import { Link } from 'react-router-dom'




const ArticleDegeneration = () => {

 const [markdown, getData] = useState(null)
  
  useEffect(() => {
  const mdPath = require("../../markdown/dau_degeneration.md");
    fetch(mdPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        getData(marked(text))
      })
  })
  
    return (
      <section className="container article__content">
        <div className="row">
          <div className="col-lg-12">
            <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
          </div>

        </div>
        <hr />
        <div className="row">
          <div className="col-lg-4">
            <Link to="/Dau-Reviews/article/article-natasha">
              <h3 className="article__content__prev">Наташа</h3>
            </Link>
            
          </div>
          <div className="col-lg-4">
            <Link to="/Dau-Reviews">
             <h3 className="article__content__home">Главная</h3>
            </Link>
           
          </div>
          <div className="col-lg-4">
            <Link to="/Dau-Reviews/article/article-nikita-tanya">
               <h3 className="article__content__next">Никита Таня</h3>
            </Link>
           
          </div>
        </div>
      </section>
    )
 
}




export default ArticleDegeneration;