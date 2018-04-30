import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 

export default class Dog extends React.Component {
    render() {
        return (
            
            <div>
                <h1> Dog image rendering from Dog js</h1>
                <ul>                
                    <li>Please press the button to generate a new random image.</li>
                    <Route path='/fetch' component={Dog} />
                    <p><Link >Dog</Link></p>
                </ul>

            </div>
           
        );
    }
}


