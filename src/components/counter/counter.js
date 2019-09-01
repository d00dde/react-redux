import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions'

const Counter = ({ counter, inc, dec, rnd }) => {

    return (
            <div className="jumbotron counter">
                <h2>{counter}</h2>
                <button className="btn btn-primary btn-lg"
                        onClick={dec}>DEC
                </button>
                <button className="btn btn-primary btn-lg"
                        onClick={inc}>INC
                </button>
                <button className="btn btn-primary btn-lg"
                        onClick={rnd}>RND
                </button>
            </div>
    );
}

const mapStateToProps = (state) => {
    return({
         counter: state
    });
}

const mapActionsToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators (actions, dispatch);

    return({
        inc,
        dec,
        rnd: () => {
            const value = Math.floor(Math.random()*10);
            rnd(value);
        }
    });
}

export default connect(mapStateToProps, mapActionsToProps)(Counter);