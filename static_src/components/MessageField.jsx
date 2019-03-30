import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import { sendMessage, replyMessage } from '../actions/messageActions';
import Message from './Message';
import '../styels/messages.scss';

class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        replyMessage: PropTypes.func.isRequired,
    };

    defaultProps = {
        nextId: 1,
    };

    state = {
        input: '',
    };

    componentDidUpdate(prevProps) {
        const { messages, messageList, nextId } = this.props;
        const lastMessageSender = messages[nextId - 1] ? messages[nextId - 1].sender : '';
        if (prevProps.messageList.length < messageList.length && lastMessageSender === 'me') {
            setTimeout(this.handleReply, 2000);
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = () => {
        this.props.sendMessage(this.state.input);
        this.setState({ input: '' });
    };

    handleReply = () => {
        this.props.replyMessage();
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
            <div>
                <div className="message-field">
                    { messageComponents }
                </div>
                <div>
                    <TextField
                        name="input"
                        hintText="Hint Text"
                        value={ this.state.input }
                        onChange={ this.handleInput }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton onClick={ this.handleSendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messageList: messageReducer.messageList,
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, replyMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);