import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
// import { useAsync } from "react-async-hook";

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);
// const { data } = await giphyFetch.gif('fpXxIjftmkk9y')
// const data = async () => {
//     const response = await giphyFetch.gif('fpXxIjftmkk9y');
//     return response;
// };
// const { data: gifs } = await gf.search('dogs', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })
// const { data: gif } = await gf.random({ tag: 'beer', type: 'stickers' })
async function getGIF() {
    try {
      const result = await giphyFetch.gif('fpXxIjftmkk9y');
      console.log(`Got the final result: ${result}`);
      const mystr = JSON.stringify(result.data);
    //   console.log(`Let's try something eh? ${mystr}`);
      const myobj = JSON.parse(mystr);
      console.log(`What about this? ${myobj}`);
      return result;
    //   return mystr;
    //   return result.data;
    //   return myobj;
    //   return result.data;
    //   return myobj;
    } catch(error) {
      console.log(error);
    } finally {
        console.log("haaatteee goat balls");
    }
  }
let data = getGIF();

// const fetchGif = () =>
//     giphyFetch.random({ tag: "space cat" });
// const fetchGifs = (offset) =>
//     giphyFetch.search("space cats", { offset, limit: 10 });

// function GiphyAvatarComponent() {
//     return (
//         <>
//             <Gif gif={fetchGifs} width={200} />
//         </>
//     );
// }

// class GiphyAvatarComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = { avatar: data };
//     }

//     async componentDidMount() {
//         // const response = (execute, status, value, error) => useAsync(getAvatar, false);
//         // const giphyResponse = await giphyFetch.random({ tag: "space cat" });
//         // const giphyResponse = await giphyFetch.gif("fpXxIjftmkk9y");
//         // this.setState({ avatar: giphyResponse });
//     }

    // render() {
    //     return (
    //         <>
    //             <Gif gif={this.props.avatar} />
    //             <p>Powered by GIPHY</p>
    //         </>
    //     );
    // }
// }

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

class GiphyAvatarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: [],
            feeling: "",
        };
    }

    componentDidMount() {
        console.log(`...component mounted something? ${data}`);
        this.setState({
            avatar: data,
            feeling: "not good times",
        });
    }

    render() {
        return (
            <>
                <ErrorBoundary>
                    <Gif gif={this.state.avatar} width={200} />
                    {/* <p>{this.state.feeling}</p> */}
                </ErrorBoundary>
                <p>Powered by GIPHY</p>
            </>
        );
    }
}

export { GiphyAvatarComponent }

