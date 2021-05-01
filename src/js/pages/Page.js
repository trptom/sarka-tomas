import React from 'react';

import Locale from '../utils/Localization';
import UserSession from '../utils/UserSession';

import PageNotAvailable from '../components/PageNotAvailable';

class Page extends React.Component {
    listener = {
        onUserChanged: (userData) => {
            this.setState({
                user: userData
            });
        }
    };
    
    constructor() {
        super();
        this.state = {
            user: null
        };
    }
    
    componentDidMount() {
        const subTitle = this.getSubTitle();
        const title = this.getTitle() + (subTitle ? (" - " + subTitle) : "");
        document.title = title;
        
        this.setState({
            user: UserSession.userData
        });
        UserSession.addListener(this.listener);
    }
    
    componentWillUnmount() {
        UserSession.removeListener(this.listener);
    }
    
    isAccessGranted() {
        return true;
    }
    
    getTitle() {
        return Locale.app_title;
    }
    
    getSubTitle() {
        return null;
    }
    
    getPage() {
        return <div className="page">Empty page...</div>;
    }
    
    render() {
        if (this.isAccessGranted()) {
            return <div className="page">{this.getPage()}</div>;
        } else {
            return <PageNotAvailable />;
        }
    }
};

export default Page;