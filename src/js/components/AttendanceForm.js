import React from 'react';

import Locale from '../utils/Localization';

import GuestService from '../services/GuestService';

class AttendanceForm extends React.Component {
    DEFAULT_MAX_GUESTS = 5;
    
    constructor() {
        super();
        
        this.state = this.getDefaultFormValues();
        
        this.addGuest = this.addGuest.bind(this);
        this.removeGuest = this.removeGuest.bind(this);
        this.isGuestAddAllowed = this.isGuestAddAllowed.bind(this);
        this.isGuestRemovalAllowed = this.isGuestRemovalAllowed.bind(this);
        this.onGuestFirstNameChanged = this.onGuestFirstNameChanged.bind(this);
        this.onGuestFamilyNameChanged = this.onGuestFamilyNameChanged.bind(this);
        this.onGuestSongChanged = this.onGuestSongChanged.bind(this);
        this.onWillJoinChanged = this.onWillJoinChanged.bind(this);
        this.onAccomodationChanged = this.onAccomodationChanged.bind(this);
        this.onNoteChanged = this.onNoteChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        
        //this.props.title
    }
    
    clearForm() {
        this.setState(this.getDefaultFormValues());
    }
    
    getDefaultFormValues() {
        return {
            guests: [
                {
                    firstName: "",
                    familyName: "",
                    song: ""
                }
            ],
            willJoin: 1,
            accomodation: 0,
            note: ""
        };
    }
    
    addGuest() {
        if (!this.isGuestAddAllowed()) {
            return;
        }
        
        let newGuests = this.state.guests;
        newGuests.push({
            firstName: null,
            familyName: null,
            song: null
        });
        
        this.setState({
            guests: newGuests
        });
    }
    
    removeGuest() {
        if (!this.isGuestRemovalAllowed()) {
            return;
        }
        
        let newGuests = this.state.guests;
        newGuests.pop();
        
        this.setState({
            guests: newGuests
        });
    }
    
    isGuestRemovalAllowed() {
        return this.state.guests.length > 1;
    }
    
    isGuestAddAllowed() {
        let max = this.props && this.props.maxGuests && !isNaN(this.props.maxGuests) ?
                this.props.maxGuests : this.DEFAULT_MAX_GUESTS;
        
        return this.state.guests.length < max;
    }
    
    onGuestFirstNameChanged(event) {
        let guestId = event.target.attributes['data-id'].value;
        this.state.guests[guestId].firstName = event.target.value;
        this.setState({
            guests: this.state.guests
        });
    }
    
    onGuestFamilyNameChanged(event) {
        let guestId = event.target.attributes['data-id'].value;
        this.state.guests[guestId].familyName = event.target.value;
        this.setState({
            guests: this.state.guests
        });
    }
    
    onGuestSongChanged(event) {
        let guestId = event.target.attributes['data-id'].value;
        this.state.guests[guestId].song = event.target.value;
        this.setState({
            guests: this.state.guests
        });
    }
    
    onWillJoinChanged(event) {
        this.state.willJoin = event.target.value;
        this.setState({
            willJoin: this.state.willJoin
        });
    }
    
    onAccomodationChanged(event) {
        this.setState({
            accomodation: event.target.value
        });
    }
    
    onNoteChanged(event) {
        this.setState({
            note: event.target.value
        });
    }
    
    onSubmit(event) {
        event.preventDefault();
        
        GuestService.guestsAdd(
                this.state.guests,
                this.state.willJoin,
                this.state.accomodation,
                this.state.note)
        .then((data) => {
            this.clearForm();
        })
        .catch((error) => {
            
        });
    }
    
    render() {
        // Add/remove guest element.
        let addGuest = null;
        if (this.isGuestAddAllowed() && this.isGuestRemovalAllowed()) {
            addGuest = (
                <div className="col-12 no-margin">
                    <a onClick={this.addGuest}>{Locale.form_attendance_guest_add}</a>
                    <span>&nbsp;/&nbsp;</span>
                    <a onClick={this.removeGuest}>{Locale.form_attendance_guest_remove}</a>
                    <span>&nbsp;{Locale.form_attendance_guest_text}</span>
                </div>
            )
        } else if (this.isGuestAddAllowed()) {
            addGuest = (
                <div className="col-12 no-margin">
                    <a onClick={this.addGuest}>{Locale.form_attendance_guest_add}</a>
                    <span>&nbsp;{Locale.form_attendance_guest_text}</span>
                </div>
            );
        } else if (this.isGuestAddAllowed()) {
            addGuest = (
                <div className="col-12 no-margin">
                    <a onClick={this.removeGuest}>{Locale.form_attendance_guest_remove}</a>
                    <span>&nbsp;{Locale.form_attendance_guest_text}</span>
                </div>
            );
        };
        
        // Array of first/family name components.
        const names = [];
        for (let a=0; a<this.state.guests.length; a++) {
            let label = [
                null, null
            ];
            let style = "col-sm-6";
            
            const ids = [
                'firstName-' + a,
                'familyName-' + a
            ];
            
            if (a == 0) {
                if (this.state.guests.length == 1) {
                    label[0] = <label htmlFor={ids[0]} className="form-label" key={ids[0] + '-label'}>{Locale.form_attendance_first_name}</label>
                    label[1] = <label htmlFor={ids[1]} className="form-label" key={ids[1] + '-label'}>{Locale.form_attendance_family_name}</label>
                } else {
                    label[0] = <label className="form-label" key={ids[0] + '-label'}>{Locale.form_attendance_first_name}</label>
                    label[1] = <label className="form-label" key={ids[1] + '-label'}>{Locale.form_attendance_family_name}</label>
                }
                style += " no-margin";
            } else {
                style += " tiny-margin";
            }
            
            names.push(
                <div className={style} key={ids[0] + '-root'}>
                    {label[0]}
                    <input id={ids[0]}
                            key={ids[0]}
                            type="text"
                            className="form-control"
                            placeholder=""
                            required={true}
                            data-id={a}
                            value={this.state.guests[a].firstName}
                            onChange={this.onGuestFirstNameChanged} />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
            );
            names.push(
                <div className={style} key={ids[1] + '-root'}>
                    {label[1]}
                    <input id={ids[1]}
                            key={ids[1]}
                            type="text"
                            className="form-control"
                            placeholder=""
                            required={true}
                            data-id={a}
                            value={this.state.guests[a].familyName}
                            onChange={this.onGuestFamilyNameChanged} />
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            );
        }
        
        const willJoin = (
            <div className="col-12">
                <label htmlFor="willJoin" className="form-label">{Locale.form_attendance_will_join}</label>
                <select className="form-control" id="willJoin" required={true} value={this.state.willJoin} onChange={this.onWillJoinChanged} >
                    <option value="1">{Locale.form_attendance_will_join_yes}</option>
                    <option value="0">{Locale.form_attendance_will_join_no}</option>
                </select>
                <div className="invalid-feedback">
                    Your username is required.
                </div>
            </div>
        );
        
        // Array of favourite songs name components.
        const songs = this.state.guests.map((val, id) => {
            let label = null;
            let style = "col-12";
            
            const ids = [
                "favouriteSong-" + id
            ];
            
            if (id == 0) {
                if (this.state.guests.length == 1) {
                    label = <label htmlFor={ids[0]} className="form-label" key={ids[0] + '-label'}>{Locale.form_attendance_favourite_song}</label>
                } else {
                    label = <label className="form-label" key={ids[0] + '-label'}>{Locale.form_attendance_favourite_song}</label>
                }
            } else {
                style += " no-margin";
            }
            
            return (
                <div className={style} key={ids[0] + '-root'}>
                    {label}
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">{val.firstName} {val.familyName}</div>
                        </div>
                        <input id={ids[0]}
                                key={ids[0]}
                                type="text"
                                className="form-control"
                                data-id={id}
                                placeholder={Locale.form_attendance_favourite_song_placeholder}
                                value={val.song}
                                onChange={this.onGuestSongChanged}/>
                    </div>
                    <div className="invalid-feedback">
                        Your username is required.
                    </div>
                </div>
            );
        });
        
        const accomodation = (
            <div className="col-12">
                <label htmlFor="accomodation" className="form-label">{Locale.form_attendance_accomodation}</label>
                <select className="form-control" id="accomodation" required={true} value={this.state.accomodation} onChange={this.onAccomodationChanged}>
                    <option value="0">{Locale.form_attendance_accomodation_no}</option>
                    <option value="1">{Locale.form_attendance_accomodation_no_driver}</option>
                    <option value="2">{Locale.form_attendance_accomodation_yes_outside}</option>
                    <option value="3">{Locale.form_attendance_accomodation_yes_inside}</option>
                    <option value="4">{Locale.form_attendance_accomodation_yes_hotel}</option>
                </select>
                <div className="invalid-feedback">
                    Your username is required.
                </div>
            </div>
        );
        
        const note = (
            <div className="col-12">
                <label htmlFor="note" className="form-label">{Locale.form_attendance_note}</label>
                <textarea className="form-control" id="note" rows="3" value={this.state.note} onChange={this.onNoteChanged}></textarea>
                <div className="invalid-feedback">
                    Your username is required.
                </div>
            </div>
        );

        const submit = (
            <div className="col-12">
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                    {Locale.form_attendance_submit}
                </button>
            </div>
        );
        
        return this.state.willJoin == 1 ? (
            <form className="attendance" onSubmit={this.onSubmit}>
                <div className="row g-3">
                    {names}
                    {addGuest}
                    {willJoin}
                    {songs}
                    {accomodation}
                    {note}
                    {submit}
                </div>
            </form>
        ) : (
            <form className="attendance" onSubmit={this.onSubmit}>
                <div className="row g-3">
                    {names}
                    {addGuest}
                    {willJoin}
                    {submit}
                </div>
            </form>
        );
    }
};

export default AttendanceForm;