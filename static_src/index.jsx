import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import initStore from './utils/store';


ReactDOM.render(
    <Provider>
        <BrowserRouter store={ initStore([]) }>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);