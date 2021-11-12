import React from 'react';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import VideoPlayer from 'react-video-js-player';

import Locale from '../utils/Localization';

import Page from './Page';

import GalleryService from '../services/GalleryService'

class GalleryPage extends Page {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }
    
    componentDidMount() {
        GalleryService.getImages(".").then((data) => {
            this.setState({
                images: data.data
            })
        });
    }

    getPage() {
        return <div className="page-gallery">
            <ImageGallery
                    items={this.state.images}
                    thumbnailPosition="left"
            />
            <a href="http://www.sarka-tomas.cz/images/photos/full.zip" target="_blank">Stáhnout kompletní archiv.</a>
              
            <p>Krátké video</p>
            <VideoPlayer
                controls={true}
                src="http://www.sarka-tomas.cz/images/photos/Short.mp4"
                width="720"
            />
              
            <p>Dlouhé video</p>
            <VideoPlayer
                controls={true}
                src="http://www.sarka-tomas.cz/images/photos/long.mp4"
                width="720"
            />
        </div>;
    }
};

export default GalleryPage;