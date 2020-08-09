import React from 'react';
import './App.css';
import { MyComponent } from './js/components/MyComponent';

class App extends React.Component {

    render() {
        return (
            <MyComponent name="Toodles" />
        );
    }
    
}

export { App }
