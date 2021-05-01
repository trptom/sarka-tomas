import React from 'react';
import {
  NavLink
} from "react-router-dom";

class NavbarItem extends React.Component {
    constructor() {
        super();
        
        this.state = {
            hover: false
        };
        
        this.showSubmenu = this.showSubmenu.bind(this);
        this.hideSubmenu = this.hideSubmenu.bind(this);
    }
    
    showSubmenu() {
        this.setState({
            hover: true
        });
    }
    
    hideSubmenu() {
        this.setState({
            hover: false
        });
    }
    
    render() {
        const className = "navbar-item level-" + (this.props.level ? this.props.level : 0);
        const submenuClassName = "navbar-submenu " + (this.state.hover ? "visible" : "hidden");
        
        if (this.props.items) {
            const items = this.props.items.map((val, id) => <NavbarItem
                    key={'navbaritem-' + id}
                    title={val.title}
                    href={val.href}
                    items={val.items}
                    level={this.props.level ? (this.props.level + 1) : 1} />);

            return (
                <div className={className} onMouseOver={this.showSubmenu} onMouseOut={this.hideSubmenu}>
                    <NavLink to={this.props.href}>
                        {this.props.title}
                    </NavLink>
                    <div className={submenuClassName}>
                        {items}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={className}>
                    <NavLink to={this.props.href}>
                        {this.props.title}
                    </NavLink>
                </div>
            );
        }
    }
};

export default NavbarItem;