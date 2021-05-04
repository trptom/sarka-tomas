import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

class AboutPage extends Page {
    getPage() {
        return <div className="page-about">
            Something...
        </div>;
    }
};

export default AboutPage;