import React from 'react';

class Dialog extends React.Component {
    constructor() {
        super();
        
        this.state = {
            visible: false
        };
    }
    
    getHeader() {
        return "";
    }
    
    getContent() {
        return "";
    }
    
    getFooter() {
        return "";
    }
    
    getClassName() {
        return "";
    }
    
    isCloseButton() {
        return true;
    }
    
    isDismissAllowed(e) {
        return true;
    }
    
    isCloseAllowed(e) {
        return true;
    }
    
    onDismiss() {
        this.hide();
    }
    
    onClose() {
        this.hide();
    }
    
    beforeShow() {
        
    }
    
    afterShow() {
        
    }
    
    beforeHide() {
        
    }
    
    afterHide() {
        
    }
    
    render() {
        return (
            <div className={"dialog " + this.getClassName() + " " + (this.state.visible ? 'visible' : 'hidden')} onClick={(e) => { if (e.target === e.currentTarget && this.isDismissAllowed(e)) { this.onDismiss(); }}}>
                <div className="dialog-box">
                    <div className="dialog-header">
                        {this.getHeader()}
                        {this.isCloseButton() ? <div className="dialog-close" onClick={(e) => { if (e.target === e.currentTarget && this.isCloseAllowed(e)) { this.onClose(); }}}></div> : null}
                    </div>
                    <div className="dialog-content">
                        {this.getContent()}
                    </div>
                    <div className="dialog-footer">
                        {this.getFooter()}
                    </div>
                </div>
            </div>
        );
    }
    
    show() {
        if (!this.state.visible) {
            this.beforeShow();
            this.setState({
                visible: true
            });
            this.afterShow();
        }
    }
    
    hide() {
        if (this.state.visible) {
            this.beforeHide();
            this.setState({
                visible: false
            });
            this.afterHide();
        }
    }
};

export default Dialog;