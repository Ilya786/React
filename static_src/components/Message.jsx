import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <div className={ this.props.sender === 'bot' ? 'bot-message' : 'my-message' }>
                { this.props.text }
            </div>
        )
    }
}