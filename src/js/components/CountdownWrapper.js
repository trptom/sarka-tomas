import React from 'react';
import Countdown from 'react-countdown';
import Locale from '../utils/Localization';

class CountdownWrapper extends React.Component {
    date = new Date(2021, 6, 24, 11, 0, 0);
    
    renderer = ({ days, hours, minutes, seconds, completed }) => {
        
        const daysStr = days.toString();
        const daysAry = []
        for (var a=0; a<daysStr.length; a++) {
            daysAry.push(<div className="number">{daysStr.charAt(a)}</div>)
        }
        
        const hoursStr = hours.toString();
        const hoursAry = []
        hoursAry.push(<div className="number">{hoursStr.length > 1 ? hoursStr.charAt(hoursStr.length - 2) : "0"}</div>)
        hoursAry.push(<div className="number">{hoursStr.length > 0 ? hoursStr.charAt(hoursStr.length - 1) : "0"}</div>)
        
        const minsStr = minutes.toString();
        const minsAry = []
        minsAry.push(<div className="number">{minsStr.length > 1 ? minsStr.charAt(minsStr.length - 2) : "0"}</div>)
        minsAry.push(<div className="number">{minsStr.length > 0 ? minsStr.charAt(minsStr.length - 1) : "0"}</div>)
        
        const secsStr = seconds.toString();
        const secsAry = []
        secsAry.push(<div className="number">{secsStr.length > 1 ? secsStr.charAt(secsStr.length - 2) : "0"}</div>)
        secsAry.push(<div className="number">{secsStr.length > 0 ? secsStr.charAt(secsStr.length - 1) : "0"}</div>)
        
        
        return <div className="countdown">
            <div className="item">
                {daysAry}
                <div className="note">{Locale.countdown_days}</div>
            </div>
            <div className="item">
                {hoursAry}
                <div className="note">{Locale.countdown_hours}</div>
            </div>
            <div className="item">
                {minsAry}
                <div className="note">{Locale.countdown_minutes}</div>
            </div>
            <div className="item">
                {secsAry}
                <div className="note">{Locale.countdown_seconds}</div>
            </div>
        </div>;
    };
    
    render() {
        return <Countdown
            date={this.date}
            renderer={this.renderer}
        />
    }
};

export default CountdownWrapper;