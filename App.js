import React from 'react';
import Header from './Header';
import Dog  from './Dog';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <h1> Dog Image Generator</h1>
                <ul>                
                    <li>Please press the button to generate a new random image.</li>
                    <p>
                        <button onClick='myFunction()'>Fetch</button>
                    </p>
                    <Route path='/Dog' component={Dog} />
                </ul>
            </div>
            </BrowserRouter>
        );
    }
}


function myFunction() {
    //document.getElementById("Dog").innerHTML = "Hello World";
//'https://images.dog.ceo/breeds/chow/n02112137_6282.jpg'

{
    document.getElementById('Dog').src='https://images.dog.ceo/breeds/chow/n02112137_6282.jpg'
    }

}