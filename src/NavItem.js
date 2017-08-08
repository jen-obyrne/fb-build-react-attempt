import React, { Component } from 'react';
import NavItemChild from './NavItemChild';
import './css/Header.css';

class NavItem extends Component {
    render() {
        if (this.props.hasChildren) {
             return (
                 <NavItemChild parentPage={this.props.page} children={this.props.children}/>
             );
        } else {
            return (
                <li>{this.props.page}</li>
            );
        }
    }
}

export default NavItem;