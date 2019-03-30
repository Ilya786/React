import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { test } from "../actions/testActions";
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
    static propTypes = {
        messageCount: PropTypes.number,
        counter: PropTypes.number.isRequired,
        data: PropTypes.string
    };

    static defaultProps = {
        messageCount: 0,
        data: 'Пусто'
    };

    render() {
        return (
            <div className="header">
                { this.props.messageCount }
                counter: { this.props.counter }
                data: { this.props.data }
            </div>)
    }
}

const mapStateToProps = ({ testReducer }) => ({
    counter: testReducer.counter,
    data: testReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);