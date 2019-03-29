import React from 'react';
import '../styels/header.css'

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h3 className="chatName">chat 1</h3>
                <p className="quantityMessage">{this.props.quantityMessage}</p>
            </header>
        )
    }
}