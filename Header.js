import React from 'react';
//import Dog  from './Dog';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 

export default class Header extends React.Component {
    render() {
        return (
  //          <BrowserRouter>
            <div>
                <h1> Dog image rendering</h1>
                <ul>                
                    <li>Please press the button to generate a new random image.</li>
                    <p><Link to='https://images.dog.ceo/breeds/chow/n02112137_6282.jpg'>Dog</Link></p>
                    <Route path='/Dog' component={Dog} />
                </ul>
            </div>
    //        </BrowserRouter>
        );
    }
}


