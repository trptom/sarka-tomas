import React from 'react';

import bg_01 from '../../images/bg_01.jpg';
import bg_02 from '../../images/bg_02.jpg';
import bg_03 from '../../images/bg_03.jpg';
import bg_04 from '../../images/bg_04.jpg';
import bg_05 from '../../images/bg_05.jpg';
import bg_06 from '../../images/bg_06.jpg';
import bg_07 from '../../images/bg_07.jpg';
import bg_08 from '../../images/bg_08.jpg';
import bg_09 from '../../images/bg_09.jpg';
import bg_10 from '../../images/bg_10.jpg';
import bg_11 from '../../images/bg_11.jpg';

class Background extends React.Component {
    timer = null;
    delay = 15000;
    images = [
        bg_01,
        bg_02,
        bg_03,
        bg_04,
        bg_05,
        bg_06,
        bg_07,
        bg_08,
        bg_09,
        bg_10,
        bg_11
    ];
    
    constructor() {
        super();
        
        this.state = {
            currentItem: -1
        };
        
        if (this.props && this.props.delay && !isNaN(this.props.delay)) {
            this.delay = parseInt(this.props.delay, 10);
        }
    }
    
    componentDidMount() {
        this.changeImage();
        
        this.timer = setInterval(() => {
            this.changeImage();
        }, this.delay);
    }
    
    componentWillUnmount() {
        if (this.timer != null) {
            clearInterval(this.timer);
        }
    }
    
    changeImage() {
        if (this.state.currentItem == -1) {
            this.setState({ currentItem: 0 });
        } else {
            let newId = ((this.state.currentItem + 1) % this.images.length)
            this.setState({ currentItem: newId });
        }
    }
    
    render() {
        let prevId = this.state.currentItem == 0 ?
                this.images.length - 1 :
                ((this.state.currentItem - 1) % this.images.length);
        let nextId = ((this.state.currentItem + 1) % this.images.length);
        
        const items = this.images.map((val, id) => {
            let cls = "inac";
            
            if (id == this.state.currentItem) {
                cls = "curr";
            } else if (id == nextId) {
                cls = "next";
            } else if (id == prevId) {
                cls = "prev";
            }
            
            return <div key={'background-image-' + id} className={cls} style={{ backgroundImage: 'url(' + val + ')' }}></div>
        });
        
        return (
            <div className="background">
                {items}
            </div>
        );
    }
};

export default Background;