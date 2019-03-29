import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styels/messages.scss';

export default class MessageField extends React.Component {
    static  propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        curId: PropTypes.number,
        handleSendMessage: PropTypes.func.isRequired,
    };
    defaultProps = {
        curId: 1,
    };
    state = {
        input: '',
    };



    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = () =>{
        this.props.handleSendMessage(this.state.input);
        this.setState({input: ''});
    };
    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) { // Enter
            this.handleSendMessage();
        }
    };

    render() {
        const { messageList, messages } = this.props;

        const messageComponents = messageList.map((messageId, index) =>
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        );

        return (
            <div className="message-box">
                <div className="message-field">
                    { messageComponents }
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        name="input"
                        hintText="Hint Text"
                        value={ this.state.input }
                        onChange={ this.handleInput }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton style={{ }} onClick={ this.handleSendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}