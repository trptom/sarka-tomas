import Service from './Service'

import UserSession from '../utils/UserSession';

class UserService extends Service {
    callLogIn(username, password) {
        return new Promise((resolve, reject) => {
            this.doRequestJSON(
                this.getUrl("login"),
                {
                    username: username,
                    password: password
                }
            ).then(data => {
                if (data.result === Service.RC_OK) {
                    UserSession.setUserData(data.user);
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(e => {
                reject(e);
            });
        });
    }
    
    callLogOut() {
        return new Promise((resolve, reject) => {
            this.doRequestJSON(
                this.getUrl("logout")
            ).then(data => {
                if (data.result === Service.RC_OK) {
                    UserSession.setUserData(null);
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(e => {
                reject(e);
            });
        });
    }
    
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            this.doRequestJSON(
                this.getUrl("currentUser")
            ).then(data => {
                if (data.result === Service.RC_OK) {
                    UserSession.setUserData(data.user);
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(e => {
                reject(e);
            });
        });
    }
    
    getMockResponse(url, data, method) {
        switch (url) {
            case "/login":
                return {
                    result: Service.RC_OK,
                    user: {
                        username: 'XXX',
                        role: {
                            admin: data.username.toLowerCase() === 'admin'
                        }
                    }
                };
            case "/currentUser":
                return {
                    result: Service.RC_OK,
                    user: {
                        username: 'XXX',
                        role: {
                            admin: true
                        }
                    }
                };
            case "/logout":
            default:
                return { result : Service.RC_OK };
        }
    }
};

export default new UserService();