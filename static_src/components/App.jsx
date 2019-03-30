import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout';
import Test from './Test';


export default class App extends React.Component {
    componentDidMount () {
        console.log('It works!');
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ obj.match.params.chatId } /> } />
            </Switch>
        )
    }
}