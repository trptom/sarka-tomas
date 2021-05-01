import React from 'react';

import Dialog from './Dialog';

import UserService from '../services/UserService';

class LoginDialog extends Dialog {
    static show() {
        if (LoginDialog.instance) {
            LoginDialog.instance.show();
        }
    }
    
    constructor() {
        super();
        
        this.submit = this.submit.bind(this);
    }
    
    componentDidMount() {
        LoginDialog.instance = this;
    }
    
    componentWillUnmount() {
        if (LoginDialog.instance === this) {
            LoginDialog.instance = null;
        }
    }
    
    getHeader() {
        return "Header";
    }
    
    getContent() {
        return (
            <form>
                <div className="form-line">
                    <div>login</div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-line">
                    <div>heslo</div>
                    <div>
                        <input type="password" />
                    </div>
                </div>
            </form>
        );
    }
    
    getFooter() {
        return (
            <button className="submit" onClick={this.submit}>Přihlásit</button>
        );
    }
    
    getClassName() {
        return "login-dialog";
    }
    
    isCloseButton() {
        return true;
    }
    
    submit() {
        UserService.callLogIn('xxx', 'yyy').then(data => {
            this.hide();
        });
    }
};

LoginDialog.instance = null;

export default LoginDialog;