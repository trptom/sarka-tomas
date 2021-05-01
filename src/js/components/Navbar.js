import React from 'react';

// utils
import Locale from '../utils/Localization';
import UserSession from '../utils/UserSession';

import UserService from '../services/UserService';

import LoginDialog from '../dialogs/LoginDialog';

import NavbarItem from './NavbarItem';

class Navbar extends React.Component {
    menuItems = [
        {
            title: Locale.navbar_home,
            //title: <div style={{'background': 'url("' + process.env.PUBLIC_URL + '/icons/home.png") 100% 100%', 'background-size': '100%', width: '32px', height: '32px'}} />,
            href: '/',
            condition: true,
            items: null
        },
        {
            title: Locale.navbar_about,
            href: '/about',
            condition: true,
            items: null
        },
        {
            title: Locale.navbar_program,
            href: '/program',
            condition: true,
            items: null
        },
        {
            title: Locale.navbar_gallery,
            href: '/gallery',
            condition: true,
            items: null
        }
    ]
    
    userSessionListener = {
        onUserChanged: (userData) => {
            this.setState({
                items: this.getMenuItems(this.menuItems)
            });
        }
    }
    
    constructor() {
        super();
        
        this.state = {
            items: this.getMenuItems(this.menuItems)
        };
    }
    
    render() {
        const items = this.state.items.map((val, id) => <NavbarItem key={'navbaritem-' + id} title={val.title} href={val.href} items={val.items} />);
        
        return (
            <div className="navbar-wrapper">
                <div className="navbar">
                    <div className="navbar-logo"></div>
                    <div className="navbar-content">
                        {items}
                    </div>
                    <div className="navbar-end" style={{ display: 'none' }}>
                        <button
                                onClick={this.logButtonClicked}>{UserSession.isLoggedIn() ? Locale.navbar_logout : Locale.navbar_login}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount() {
        UserSession.addListener(this.userSessionListener);
    }
    
    componentWillUnmount() {
        UserSession.removeListener(this.userSessionListener);
    }
    
    /**
     * Filters menu items from <i>obj</i> which does not meet <i>condition</i>.
     * @param {Array} obj array of original items.
     * @returns nested array of filtered items.
     */
    getMenuItems(obj) {
        let result = [];
        for (var a=0; a<obj.length; a++) {
            if ((typeof obj[a].condition === "undefined") ||
                    (obj[a].condition === true) ||
                    (typeof obj[a].condition === "function" && obj[a].condition() === true)) {
                let val = {
                    title: obj[a].title,
                    href: obj[a].href,
                    items: null
                };
                
                if (obj[a].items) {
                    val.items = this.getMenuItems(obj[a].items);
                }
                
                result[result.length] = val;
            }
        }
        return result;
    }
    
    logButtonClicked(e) {
        if (!UserSession.isLoggedIn()) {
            LoginDialog.show();
        } else {
            UserService.callLogOut();
        }
    }
};

export default Navbar;