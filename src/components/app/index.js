import React, {Component} from 'react';
import Counter from '../counter';

import { createStore, bindActionCreators } from 'redux';
import reducer from '../../reducer';
import * as actions from '../../actions';

export default class App extends Component {

    constructor (params){
        super (params);
        this.store = createStore(reducer, 0);
        this.actions = bindActionCreators(actions, this.store.dispatch);
        this.store.subscribe(this.render);
    }

    render = () => {
        console.log("---")
        return(
           <Counter
                count={this.store.getState()}
                decrement={this.decrement}
                increment={this.increment}
                random={this.random}/>
       )
    }

    decrement = () => {
        this.actions.dec();
    }
    increment = () => {
        this.actions.inc();
    }
    random = () => {
        this.actions.rnd(Math.floor(Math.random()*10));
    }

    delay = (time) => {
        for(let i=0; i < time; i++ ) {
            Math.random();
        }
    }
}
