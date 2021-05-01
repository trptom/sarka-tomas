import React from 'react';
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";

// utils
import './js/utils/Localization';

// services
import UserService from './js/services/UserService';

// dialogs
import LoginDialog from './js/dialogs/LoginDialog';

// components
import Navbar from './js/components/Navbar';
import Footer from './js/components/Footer';

// pages
import HomePage from './js/pages/HomePage';

import './css/style.css';

//DotEnv.config();

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            appReady: false
        };
    }
    
    componentDidMount() {
        this.initApp();
    }
    
    render() {
        if (this.state.appReady) {
            return (
                <HashRouter>
                    <div className="app">
                        <LoginDialog />
                        <Navbar />
                        <div className="content-wrapper">
                            <Route exact path="/" component={HomePage}/>
                        </div>
                        <Footer />
                    </div>
                </HashRouter>
            );
        } else {
            return (
                <div className="app app-loading">
                    <div className="text">Loading, please wait...</div>
                    <div className="loader"></div>
                </div>
            );
        }
    }
    
    initApp() {
        const getUser = UserService.getCurrentUser();
        
        Promise.all([getUser]).then(values => {
            this.setState({
                appReady: true
            });
        }).catch(e => {
            console.log(e);
        });
    }
};

export default App;
