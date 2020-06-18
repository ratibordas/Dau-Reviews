import React,{ Suspense } from 'react';
import AboutPage from '../about-page'
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArticleNatasha from '../articles/article-natasha/article-natasha'
import Preloader from '../preloader/preloader'
const HomePage = React.lazy(() => import('../home-page'))

const App = () => {


  
  return (
    <>
      {/* <Preloader/> */}
    <Router>
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/" exact>
            <Suspense fallback={<Preloader/>}>
              <HomePage/>
               </Suspense> 
              </Route>
        <Route path="/article/article-natasha">
          <ArticleNatasha/>
        </Route> 
      </Switch>
    
    </Router>
      </>
  )
}

export default App;
