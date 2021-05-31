import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

import AttendanceForm from "../components/AttendanceForm"

import GuestService from '../services/GuestService';

class ContactPage extends Page {
    getPage() {
        return <div className="page-contact">
            <AttendanceForm />
        </div>;
    }
};

export default ContactPage;