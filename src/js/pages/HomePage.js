import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

import CountdownWrapper from "../components/CountdownWrapper";

class HomePage extends Page {
    getPage() {
        return <div className="page-home">
            <div className="names">{Locale.content_home}</div>
            <CountdownWrapper />
        </div>;
    }
};

export default HomePage;