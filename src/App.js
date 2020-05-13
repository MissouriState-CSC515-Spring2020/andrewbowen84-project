import React, { Suspense, lazy } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
const Landing = lazy (() => import('./landing'));
const Categories = lazy(() => import('./categories'));
const Details = lazy(() => import('./details'));
function App(){

    return(
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
            <div className='overlay'>
                <Navigation/>
                <Route exact path="/" component={Landing}/>
                <Route path="/categories" component={Categories}/>
                <Route path='/details' component={Details}/>
            </div>

        </BrowserRouter>
        </Suspense>
        
    );
} export default App;