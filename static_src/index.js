import React from 'react';
import ReactDOM from 'react-dom';
import 'styels/styels.scss'

// const element = React.createElement(
//     'h1',
//     {className: 'element'},
//     'Test'
// );


const element = (param) =>  <div className='test'>{param}</div>;


ReactDOM.render(
    element,
    document.getElementById('root'),
);