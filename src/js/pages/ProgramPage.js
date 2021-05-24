import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

import GuestService from '../services/GuestService';

class ProgramPage extends Page {
    submitClicked() {
        GuestService.guestAdd("a", "b", 0, 0, null, "some song").then(() => {
            console.log("xxx");
        });
    }
    
    getPage() {
        return <div className="page-program">
            Something...
            <button onClick={this.submitClicked}>
                Click me...
            </button>
        </div>;
    }
};

export default ProgramPage;