import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

class AboutPage extends Page {
    getPage() {
        return (
        <div className="page-about">
            <div className="story">
                <div className="story-item">
                    <img src="" />
                    <div className="description"></div>
                </div>
                <div className="story-item">
                    <img src="" />
                    <div className="description"></div>
                </div>
                <div className="story-item">
                    <img src="" />
                    <div className="description"></div>
                </div>
                <div className="story-item">
                    <img src="" />
                    <div className="description"></div>
                </div>
            </div>
        </div>
        );
    }
};

export default AboutPage;