class UserSession {
    /**
     * 
     * @param {Object} listener listener with possible callbacks:
     * <ul><li>onUserChanged(userData)</li></ul>
     */
    static addListener(listener) {
        UserSession.listeners[UserSession.listeners.length] = listener;
    }
    
    static removeListener(listener) {
        let index = UserSession.listeners.indexOf(listener);
        
        while (index >= 0) {
            UserSession.listeners.splice(index, 1);
            index = UserSession.listeners.indexOf(listener);
        }
    }
    
    static setUserData(userData) {
        if (UserSession.userData !== userData) {
            UserSession.userData = userData;
            
            for (var a=0; a<UserSession.listeners.length; a++) {
                if (typeof UserSession.listeners[a].onUserChanged === "function") {
                    UserSession.listeners[a].onUserChanged(UserSession.userData);
                }
            }
        }
    }
    
    static isLoggedIn() {
        return UserSession.userData !== undefined && UserSession.userData !== null;
    }
}

UserSession.listeners = [];
UserSession.userData = null;

export default UserSession;