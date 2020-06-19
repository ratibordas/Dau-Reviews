import React, { Suspense } from 'react';

import {
    ArticleNatasha, ArticleBravePeople, ArticleDegeneration, ArticleKatyaTanya,
ArticleNewMan,ArticleNikitaTanya, ArticleNoraMother, ArticleStringTheory, ArticleThreeDays } from './articles'



import AboutPage from '../about-page'
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Preloader from '../preloader/preloader'
const HomePage = React.lazy(() => import('../home-page'))



const App = () => {



  return (
    <>
      <Preloader/>
      <Router>
        <Switch>
          <Route path="/Dau-Reviews/about" component={AboutPage} />
          <Route path="/Dau-Reviews" exact>
            <Suspense fallback={<Preloader />}>
              <HomePage />
            </Suspense>
          </Route>
          <Route path="/Dau-Reviews/article/article-natasha"><ArticleNatasha /></Route>
          <Route path="/Dau-Reviews/article/article-brave-people"><ArticleBravePeople /></Route>
          <Route path="/Dau-Reviews/article/article-degeneration"><ArticleDegeneration /></Route>
          <Route path="/Dau-Reviews/article/article-katya-tanya"><ArticleKatyaTanya /></Route>
          <Route path="/Dau-Reviews/article/article-new-man"><ArticleNewMan /></Route>
          <Route path="/Dau-Reviews/article/article-nikita-tanya"><ArticleNikitaTanya /></Route>
          <Route path="/Dau-Reviews/article/article-nora-mama"><ArticleNoraMother /></Route>
          <Route path="/Dau-Reviews/article/article-string-theory"><ArticleStringTheory /></Route>
          <Route path="/Dau-Reviews/article/article-three-days"><ArticleThreeDays /></Route>
        </Switch>

      </Router>
    </>
  )
}

export default App;
