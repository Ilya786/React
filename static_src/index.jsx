import React from 'react';
import ReactDOM from 'react-dom';
import 'styels/reset.css'
import 'styels/styels.scss'

// const element = React.createElement(
//     'h1',
//     {className: 'element'},
//     'Test'
// );
class Element extends React.Component{
    render() {
        return (<div>gkjl</div>);
    };
}

// const element = (param) =>  <div className='test'>{param}</div>;


ReactDOM.render(
    <Element/>,
    document.getElementById('root'),
);