import React from 'react';
import './App.css';
import { MyComponent } from './js/components/MyComponent';
import { GiphyComponent } from './js/components/GiphyComponent';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <MyComponent name="Toodles" />
                <GiphyComponent />
            </React.Fragment>
        );
    }
    
}

export { App }
