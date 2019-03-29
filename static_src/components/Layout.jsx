import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';
import '../styels/layout.scss';

export default class Layout extends React.Component {
    state = {
        quantityMessage: "5",
    };
    render(){
        return (<div className="layout">
            <Header/>
            <div className="chatList">
                <ChatList/>
                <MessageField/>
            </div>
        </div>)
    }
}