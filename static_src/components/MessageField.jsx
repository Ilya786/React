import React from 'react';
import Message from './Message'

export default class MessageField extends React.Component {
    state = {
        messages: [],
    };
    // componentDidMount() {
    //     const newMessages = [...this.state.messages, 'mess'];
    //     setTimeout(() => this.setState({ messages: newMessages }), 1000)
    // }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1] === 'Вопрос!'){
            const newMessages = [...this.state.messages, 'Ответ'];
            setTimeout(() => this.setState({ messages: newMessages }), 1000)
        }else if (this.state.messages[this.state.messages.length - 1] === 'Хочу задать вопрос'){
            const newMessages = [...this.state.messages, 'Задавайте вопрос'];
            setTimeout(() => this.setState({ messages: newMessages }), 1000)
        }

    }

    handleClick = () => {
        const newMessages = [...this.state.messages, 'Хочу задать вопрос'];
        if(this.state.messages.length === 0 ||
            this.state.messages[this.state.messages.length-1] === 'До свидания') {
            this.setState({ messages: newMessages })
        }
    };
    handleClick2 = () => {
        const newMessages = [...this.state.messages, 'Вопрос!'];
        if(this.state.messages[this.state.messages.length-1] === 'Задавайте вопрос' ||
            this.state.messages[this.state.messages.length-1] === 'Ответ') {
            this.setState({ messages: newMessages })
        }
    };
    handleClick3 = () => {
        const newMessages = [...this.state.messages, 'До свидания'];
        if(this.state.messages.length === 0 ||
            this.state.messages[this.state.messages.length-1] === 'До свидания') {
        }else{
            this.setState({ messages: newMessages })
        }
    };

    render() {
        const messages = this.state.messages.map((message, index) =>
            <Message key={ index } text={ message } />
        );

        return (
            <div>
                { messages }
                <button onClick={ this.handleClick }>Начать диалог</button>
                <button onClick={ this.handleClick2 }>Задть вопрос</button>
                <button onClick={ this.handleClick3 }>Завершить диалог</button>
            </div>
        )
    }
}