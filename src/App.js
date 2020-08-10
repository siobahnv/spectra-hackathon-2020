import React from 'react';
import './App.css';
// import { MyComponent } from './js/components/MyComponent-old';
// import { GiphyCarouselComponent } from './js/components/GiphyCarouselComponent';
// import SplitPane from './js/components/SplitPaneComponent';

// import { GiphyAvatarComponent } from './js/components/GiphyAvatarComponent';
// import GiphyAvatarComponent from './js/components/GiphyAvatarComponent';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);
// const fetchGif = giphyFetch.random({ tag: "space cat" });

// function GiphyAvatarComponent() {
    // return (
    //     <>
    //         <Gif gif={fetchGif} />
    //     </>
    // );
// }

// <React.Fragment>
//     <GiphyCarouselComponent />
//     <Gif gif={fetchGif} width={200} />
//     <SplitPane left={<Contacts />} right={<MyComponent />} />
// </React.Fragment>

// function Contacts() {
//     return <div className="Contacts" />;
// }

// class App extends React.Component {
//     render() {
//         return (
//             <GiphyAvatarComponent />
//         );
//     }   
// }

let prom = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('a value')
    }, 100)
})

let bloodyhell = async getGIF() => {
    try {
        const response = await giphyFetch.random({ tag: "space cat" });
        this.setState({
            myGIF: response,
        });
    } catch(err) {
        console.log(err);
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            // hasError: false,
            // kitty: [],
            // myGIF: [],
        };
    }

    // async getGIF() {
    //     try {
    //         const response = await giphyFetch.random({ tag: "space cat" });
    //         this.setState({
    //             myGIF: response,
    //         });
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // componentDidMount() {
    //     console.log("...component is mounting?");
    //     this.getGIF();
    //     console.log("...did the shit mount?");
    //     console.log(this.state.myGIF);
    // }
    
    
    // render() {
    //     console.log("Does it make it here?");
    //     console.log("kitty: ");
    //     console.log(this.state.kitty);
    //     console.log("myGIF: ");
    //     console.log(this.state.myGIF);
    //     return (
    //         <>
    //             <Gif gif={this.state.myGIF} width={200} />
    //         </>
    //     );
    // } 
    componentDidMount() {
        prom.then((value) => {
            this.setState({val: value})
        })
    }
    render () {
        if (!this.state.val) return null
            return <div>{this.state.val}</div>
        }  
}

export { App }
