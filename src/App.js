import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
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
import AboutPage from './js/pages/AboutPage';
import ProgramPage from './js/pages/ProgramPage';
import GalleryPage from './js/pages/GalleryPage';
import ContactPage from './js/pages/ContactPage';

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
            /*return (
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
            );*/
            return <Router>
              <Switch>
                <Route path="*">
                    <LoginDialog />
                    <Navbar />
                    <AppContent />
                    <Footer />
                </Route>
              </Switch>
            </Router>;
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
        // Activate when user logging will be needed.
        /*const getUser = UserService.getCurrentUser();
        
        Promise.all([getUser]).then(values => {
            this.setState({
                appReady: true
            });
        }).catch(e => {
            console.log(e);
        });*/
        
        this.setState({
            appReady: true
        });
    }
};

function AppContent() {
    let location = useLocation();
    
    return (
        <div className="content-wrapper">
            <TransitionGroup className="content">
                <CSSTransition
                    key={location.key}
                    classNames="slide"
                    timeout={500}>
                    <Switch location={location}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/about" component={ProgramPage}/>
                        <Route exact path="/program" component={ProgramPage}/>
                        <Route exact path="/gallery" component={GalleryPage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
