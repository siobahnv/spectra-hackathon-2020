import React, { useState } from 'react';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
// import { useAsync } from "react-async-hook";

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);


const fetchGifs = (offset) =>
    giphyFetch.search("space cats", { offset, limit: 10 });

function GiphyComponent() {
    return (
        <>
            <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />
            <p>Powered by GIPHY</p>
        </>
    );
}

export { GiphyComponent }